const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

    // Ensure tables exist
    await tableRequest('POST', '/Tables', { TableName: 'batches' });
    await tableRequest('POST', '/Tables', { TableName: 'batchmembers' });

    // Get all batches
    const batchResult = await tableRequest('GET', '/batches()');
    const batches = (batchResult.body && batchResult.body.value) || [];

    // Get all batch members to compute counts
    const membersResult = await tableRequest('GET', '/batchmembers()');
    const allMembers = (membersResult.body && membersResult.body.value) || [];

    // Build member counts per batch
    const memberCounts = {};
    allMembers.forEach(m => {
      memberCounts[m.PartitionKey] = (memberCounts[m.PartitionKey] || 0) + 1;
    });

    const now = new Date();
    const result = batches.map(b => ({
      id: b.RowKey,
      name: b.name,
      courses: b.courses,
      expiresAt: b.expiresAt,
      createdAt: b.createdAt,
      status: new Date(b.expiresAt) > now ? 'active' : 'expired',
      memberCount: memberCounts[b.RowKey] || 0
    }));

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { batches: result }
    };
  } catch (err) {
    context.log.error('List batches error:', err.message);
    context.res = { status: 200, headers: HEADERS, body: { batches: [] } };
  }
};
