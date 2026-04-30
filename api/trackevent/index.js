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

  try {
    const { event, data } = req.body || {};
    if (!event) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'event required' } };
      return;
    }

    // Resolve userId from token if present
    let userId = 'anonymous';
    const token = req.headers['x-auth-token'] || '';
    if (token) {
      try {
        const allUsers = await tableRequest('GET', '/users()');
        const caller = (allUsers.body && allUsers.body.value || []).find(u => u.token === token);
        if (caller) userId = caller.RowKey;
      } catch { /* ignore — anonymous is fine */ }
    }

    const now = new Date();
    const partitionKey = now.toISOString().slice(0, 10);
    const rowKey = `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`;

    const entity = {
      PartitionKey: partitionKey,
      RowKey: rowKey,
      event: event,
      data: JSON.stringify(data || {}),
      timestamp: now.toISOString(),
      userAgent: (req.headers['user-agent'] || '').slice(0, 500),
      userId: userId
    };

    // Ensure analytics table exists (no-op if it does)
    const createRes = await tableRequest('POST', '/Tables', { TableName: 'analytics' });
    const insertRes = await tableRequest('POST', '/analytics', entity);

    context.res = {
      status: 200,
      headers: HEADERS,
      body: {
        ok: insertRes.status >= 200 && insertRes.status < 300,
        createStatus: createRes.status,
        insertStatus: insertRes.status,
        insertBody: insertRes.body
      }
    };
  } catch (err) {
    context.log.error('Track event error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: err.message } };
  }
};
