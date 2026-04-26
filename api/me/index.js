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

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { user: { name: user.name, email: user.RowKey, courseAccess: user.courseAccess || '' } }
    };
  } catch (err) {
    context.log.error('Auth check error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
