const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const token = req.headers['x-auth-token'] || '';
  if (!token) {
    context.res = { status: 401, headers: HEADERS, body: { error: 'Please sign in first.' } };
    return;
  }

  try {
    // Authenticate user
    const allUsers = await tableRequest('GET', '/users()');
    const users = (allUsers.body && allUsers.body.value) || [];
    const caller = users.find(u => u.token === token);
    if (!caller) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid session. Please sign in again.' } };
      return;
    }

    const { batchCode } = req.body || {};
    if (!batchCode) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Batch code is required.' } };
      return;
    }

    // Find batch by batchCode
    await tableRequest('POST', '/Tables', { TableName: 'batches' });
    const batchesResult = await tableRequest('GET', '/batches()');
    const batches = (batchesResult.body && batchesResult.body.value) || [];
    const batch = batches.find(b => b.batchCode === batchCode);

    if (!batch) {
      context.res = { status: 404, headers: HEADERS, body: { error: 'Invalid batch code. Please check and try again.' } };
      return;
    }

    // Check expiry
    if (new Date(batch.expiresAt) <= new Date()) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'This batch has expired.' } };
      return;
    }

    const batchId = batch.RowKey;
    const userEmail = caller.RowKey;

    // Check if student is pre-approved (exists in batchmembers)
    await tableRequest('POST', '/Tables', { TableName: 'batchmembers' });
    const memberResult = await tableRequest('GET', `/batchmembers(PartitionKey='${encodeURIComponent(batchId)}',RowKey='${encodeURIComponent(userEmail)}')`);

    if (memberResult.status === 404 || !memberResult.body) {
      context.res = { status: 403, headers: HEADERS, body: { error: 'You are not pre-approved for this batch. Please contact the administrator.' } };
      return;
    }

    const member = memberResult.body;

    // Check if already enrolled
    if (member.enrolled === true || member.enrolled === 'true') {
      context.res = { status: 200, headers: HEADERS, body: { success: true, alreadyEnrolled: true, courseId: batch.courseId || batch.courses, message: 'You are already enrolled in this batch!' } };
      return;
    }

    // Check capacity
    const allMembers = await tableRequest('GET', `/batchmembers()?$filter=PartitionKey eq '${encodeURIComponent(batchId)}'`);
    const members = (allMembers.body && allMembers.body.value) || [];
    const enrolledCount = members.filter(m => m.enrolled === true || m.enrolled === 'true').length;
    const maxSize = parseInt(batch.maxSize) || 999999;

    if (enrolledCount >= maxSize) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'This batch is full. Please contact the administrator.' } };
      return;
    }

    // Enroll: update batchmember with enrolled=true
    const updatedMember = {
      PartitionKey: batchId,
      RowKey: userEmail,
      studentName: member.studentName || caller.name || '',
      addedAt: member.addedAt || new Date().toISOString(),
      enrolled: 'true',
      enrolledAt: new Date().toISOString()
    };

    const updateResult = await tableRequest('PUT', `/batchmembers(PartitionKey='${encodeURIComponent(batchId)}',RowKey='${encodeURIComponent(userEmail)}')`, updatedMember);

    if (updateResult.status >= 400) {
      context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to complete enrollment.' } };
      return;
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: {
        success: true,
        courseId: batch.courseId || batch.courses,
        batchName: batch.name,
        message: 'Successfully enrolled! You now have access to the course.'
      }
    };
  } catch (err) {
    context.log.error('Enroll batch error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
