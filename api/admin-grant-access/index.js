const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

    const { email, courseId } = req.body || {};
    if (!email || !courseId) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Email and courseId are required.' } };
      return;
    }

    // Look up target user
    const userResult = await tableRequest('GET', `/users(PartitionKey='user',RowKey='${encodeURIComponent(email)}')`);
    if (userResult.status === 404 || !userResult.body) {
      context.res = { status: 404, headers: HEADERS, body: { error: 'User not found.' } };
      return;
    }

    const user = userResult.body;
    const existing = (user.courseAccess || '').split(',').map(s => s.trim()).filter(Boolean);
    if (!existing.includes(courseId)) {
      existing.push(courseId);
    }

    const updateEntity = {
      PartitionKey: 'user',
      RowKey: email,
      name: user.name,
      salt: user.salt,
      passwordHash: user.passwordHash,
      token: user.token,
      courseAccess: existing.join(',')
    };

    await tableRequest('PUT', `/users(PartitionKey='user',RowKey='${encodeURIComponent(email)}')`, updateEntity);

    context.res = { status: 200, headers: HEADERS, body: { success: true, courseAccess: updateEntity.courseAccess } };
  } catch (err) {
    context.log.error('Grant access error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
