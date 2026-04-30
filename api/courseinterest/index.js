const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
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
    const allUsers = await tableRequest('GET', '/users()');
    const users = (allUsers.body && allUsers.body.value) || [];
    const caller = users.find(u => u.token === token);
    if (!caller) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid session.' } };
      return;
    }

    await tableRequest('POST', '/Tables', { TableName: 'courseinterest' });

    if (req.method === 'POST') {
      const { courseId, courseName, name, email, phone } = req.body || {};
      if (!courseId) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'courseId is required.' } };
        return;
      }
      if (!email && !phone) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'Please provide at least an email or phone number.' } };
        return;
      }

      const entity = {
        PartitionKey: courseId,
        RowKey: caller.RowKey + '-' + Date.now(),
        studentEmail: caller.RowKey,
        studentName: name || caller.name || '',
        contactEmail: email || '',
        contactPhone: phone || '',
        courseName: courseName || courseId,
        createdAt: new Date().toISOString()
      };

      const result = await tableRequest('POST', '/courseinterest', entity);
      if (result.status >= 400) {
        context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to submit interest.' } };
        return;
      }

      context.res = {
        status: 200,
        headers: HEADERS,
        body: { success: true, message: 'Interest submitted! We will contact you soon.' }
      };
    } else if (req.method === 'GET') {
      // Admin only
      if (caller.RowKey !== ADMIN_EMAIL) {
        context.res = { status: 403, headers: HEADERS, body: { error: 'Admin access required.' } };
        return;
      }

      const result = await tableRequest('GET', '/courseinterest()');
      const interests = (result.body && result.body.value) || [];

      context.res = {
        status: 200,
        headers: HEADERS,
        body: interests.map(i => ({
          partitionKey: i.PartitionKey,
          rowKey: i.RowKey,
          courseId: i.PartitionKey,
          courseName: i.courseName || i.PartitionKey,
          studentName: i.studentName || '',
          studentEmail: i.studentEmail || '',
          contactEmail: i.contactEmail || '',
          contactPhone: i.contactPhone || '',
          createdAt: i.createdAt || ''
        }))
      };
    } else if (req.method === 'DELETE') {
      // Admin only
      if (caller.RowKey !== ADMIN_EMAIL) {
        context.res = { status: 403, headers: HEADERS, body: { error: 'Admin access required.' } };
        return;
      }

      const { partitionKey, rowKey } = req.body || {};
      if (!partitionKey || !rowKey) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'partitionKey and rowKey are required.' } };
        return;
      }

      await tableRequest('DELETE', `/courseinterest(PartitionKey='${encodeURIComponent(partitionKey)}',RowKey='${encodeURIComponent(rowKey)}')`);

      context.res = {
        status: 200,
        headers: HEADERS,
        body: { success: true }
      };
    }
  } catch (err) {
    context.log.error('Course interest error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
