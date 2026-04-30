const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const token = req.headers['x-auth-token'] || '';

  if (!token) {
    context.res = { status: 401, headers: HEADERS, body: { error: 'No authorization token provided.' } };
    return;
  }

  try {
    const result = await tableRequest('GET', '/users()');

    if (!result.body || !result.body.value) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid or expired token.' } };
      return;
    }

    const user = result.body.value.find(u => u.token === token);
    if (!user) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid or expired token.' } };
      return;
    }

    // Merge batch-based course access
    let mergedAccess = user.courseAccess || '';
    try {
      await tableRequest('POST', '/Tables', { TableName: 'batchmembers' });
      await tableRequest('POST', '/Tables', { TableName: 'batches' });

      const membershipsResult = await tableRequest('GET', `/batchmembers()?$filter=RowKey eq '${encodeURIComponent(user.RowKey)}'`);
      const memberships = (membershipsResult.body && membershipsResult.body.value) || [];

      if (memberships.length > 0) {
        const batchesResult = await tableRequest('GET', '/batches()');
        const batches = (batchesResult.body && batchesResult.body.value) || [];
        const batchMap = {};
        batches.forEach(b => { batchMap[b.RowKey] = b; });

        const now = new Date();
        const accessSet = new Set(mergedAccess.split(',').map(s => s.trim()).filter(Boolean));

        memberships.forEach(m => {
          // Only count if student is enrolled
          if (m.enrolled !== true && m.enrolled !== 'true') return;
          const batch = batchMap[m.PartitionKey];
          if (batch && new Date(batch.expiresAt) > now) {
            (batch.courseId || batch.courses || '').split(',').map(s => s.trim()).filter(Boolean).forEach(c => accessSet.add(c));
          }
        });

        mergedAccess = Array.from(accessSet).join(',');
      }
    } catch (batchErr) {
      context.log.warn('Batch access merge skipped:', batchErr.message);
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { user: { name: user.name, email: user.RowKey, courseAccess: mergedAccess } }
    };
  } catch (err) {
    context.log.error('Auth check error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
