const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace('Bearer ', '').trim();

  if (!token) {
    context.res = { status: 401, headers: HEADERS, body: { error: 'No authorization token provided.' } };
    return;
  }

  try {
    // Query Table Storage for user with matching token
    const filter = encodeURIComponent(`PartitionKey eq 'user' and token eq '${token}'`);
    const result = await tableRequest('GET', `/Users()?$filter=${filter}`);

    if (!result.body || !result.body.value || result.body.value.length === 0) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid or expired token.' } };
      return;
    }

    const user = result.body.value[0];
    context.res = {
      status: 200,
      headers: HEADERS,
      body: { user: { name: user.name, email: user.RowKey } }
    };
  } catch (err) {
    context.log.error('Auth check error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
