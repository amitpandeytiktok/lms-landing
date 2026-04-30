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
    const allUsers = await tableRequest('GET', '/users()');
    const users = (allUsers.body && allUsers.body.value) || [];
    const caller = users.find(u => u.token === token);
    if (!caller || caller.RowKey !== ADMIN_EMAIL) {
      context.res = { status: 403, headers: HEADERS, body: { error: 'Admin access required.' } };
      return;
    }

    const result = await tableRequest('GET', "/leads()?$filter=PartitionKey eq 'lead'&$orderby=createdAt desc");
    const leads = (result.body && result.body.value) || [];

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { leads: leads.map(l => ({ name: l.name, email: l.email, phone: l.phone, createdAt: l.createdAt })) }
    };
  } catch (err) {
    context.log.error('List leads error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
