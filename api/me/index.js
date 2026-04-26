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
    // Query all users and filter in code (OData filter on custom properties can be tricky)
    const result = await tableRequest('GET', '/users()');

    context.log('Table query result status:', result.status);
    context.log('Table query body:', JSON.stringify(result.body));

    if (!result.body || !result.body.value) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid or expired token.', debug: { status: result.status, hasBody: !!result.body } } };
      return;
    }

    const user = result.body.value.find(u => u.token === token);
    if (!user) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid or expired token.', debug: { totalUsers: result.body.value.length, tokenSearched: token.substring(0, 8) + '...' } } };
      return;
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { user: { name: user.name, email: user.RowKey } }
    };
  } catch (err) {
    context.log.error('Auth check error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.', debug: err.message } };
  }
};
