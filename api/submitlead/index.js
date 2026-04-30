const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  try {
    const { name, email, phone } = req.body || {};
    if (!name && !email && !phone) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'At least one field required.' } };
      return;
    }

    const now = new Date();
    const entity = {
      PartitionKey: 'lead',
      RowKey: `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name || '',
      email: email || '',
      phone: phone || '',
      createdAt: now.toISOString(),
      userAgent: (req.headers['user-agent'] || '').slice(0, 500)
    };

    await tableRequest('POST', '/leads', entity);
    context.res = { status: 200, headers: HEADERS, body: { ok: true } };
  } catch (err) {
    context.log.error('Submit lead error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
