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

    const { name, courses, expiresAt } = req.body || {};
    if (!name || !courses || !expiresAt) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Name, courses, and expiresAt are required.' } };
      return;
    }

    const batchId = 'batch-' + Date.now();
    const entity = {
      PartitionKey: 'batch',
      RowKey: batchId,
      name,
      courses,
      expiresAt,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    // Create batches table if needed (Azure returns 409 if exists, that's fine)
    await tableRequest('POST', '/Tables', { TableName: 'batches' });

    const result = await tableRequest('POST', '/batches', entity);
    if (result.status >= 400) {
      context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to create batch: ' + (result.body && result.body.Message || 'unknown') } };
      return;
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { success: true, batch: { id: batchId, name, courses, expiresAt, createdAt: entity.createdAt, status: 'active' } }
    };
  } catch (err) {
    context.log.error('Create batch error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
