const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token'
};

const ADMIN_EMAIL = 'officialtechwaveteam@gmail.com';

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const token = req.headers['x-auth-token'] || '';
  if (!token) {
    context.res = { status: 401, headers: HEADERS, body: { error: 'Unauthorized' } };
    return;
  }

  try {
    // Verify admin
    const allUsers = await tableRequest('GET', '/users()');
    const caller = (allUsers.body && allUsers.body.value || []).find(u => u.token === token);
    if (!caller || caller.RowKey !== ADMIN_EMAIL) {
      context.res = { status: 403, headers: HEADERS, body: { error: 'Admin access required.' } };
      return;
    }

    // Ensure table exists
    await tableRequest('POST', '/Tables', { TableName: 'batchmembers' });

    if (req.method === 'GET') {
      return handleGet(context, req);
    } else if (req.method === 'POST') {
      const action = (req.body && req.body.action) || 'add';
      if (action === 'remove') {
        return handleRemove(context, req);
      }
      return handleAdd(context, req);
    }
  } catch (err) {
    context.log.error('Batch members error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};

async function handleGet(context, req) {
  const batchId = req.query && req.query.batchId;
  if (!batchId) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'batchId query parameter is required.' } };
    return;
  }

  const result = await tableRequest('GET', `/batchmembers()?$filter=PartitionKey eq '${batchId}'`);
  const members = (result.body && result.body.value) || [];

  context.res = {
    status: 200,
    headers: HEADERS,
    body: {
      members: members.map(m => ({
        email: m.RowKey,
        studentName: m.studentName || '',
        addedAt: m.addedAt || ''
      }))
    }
  };
}

async function handleAdd(context, req) {
  const { batchId, email, studentName } = req.body || {};
  if (!batchId || !email) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'batchId and email are required.' } };
    return;
  }

  // Check if already a member
  const existing = await tableRequest('GET', `/batchmembers(PartitionKey='${encodeURIComponent(batchId)}',RowKey='${encodeURIComponent(email)}')`);
  if (existing.status === 200) {
    context.res = { status: 409, headers: HEADERS, body: { error: 'Student is already in this batch.' } };
    return;
  }

  const entity = {
    PartitionKey: batchId,
    RowKey: email,
    studentName: studentName || '',
    addedAt: new Date().toISOString()
  };

  const result = await tableRequest('POST', '/batchmembers', entity);
  if (result.status >= 400) {
    context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to add member.' } };
    return;
  }

  context.res = {
    status: 200,
    headers: HEADERS,
    body: { success: true, member: { email, studentName: studentName || '', addedAt: entity.addedAt } }
  };
}

async function handleRemove(context, req) {
  const { batchId, email } = req.body || {};
  if (!batchId || !email) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'batchId and email are required.' } };
    return;
  }

  const result = await tableRequest('DELETE', `/batchmembers(PartitionKey='${encodeURIComponent(batchId)}',RowKey='${encodeURIComponent(email)}')`);
  if (result.status >= 400 && result.status !== 404) {
    context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to remove member.' } };
    return;
  }

  context.res = {
    status: 200,
    headers: HEADERS,
    body: { success: true }
  };
}
