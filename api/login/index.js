const crypto = require('crypto');
const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'Email and password are required.' } };
    return;
  }

  try {
    // Look up user
    const result = await tableRequest('GET', `/Users(PartitionKey='user',RowKey='${encodeURIComponent(email)}')`);
    if (result.status === 404 || !result.body) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid email or password.' } };
      return;
    }

    const user = result.body;

    // Verify password
    const hash = crypto.pbkdf2Sync(password, user.salt, 100000, 64, 'sha512').toString('hex');
    if (hash !== user.passwordHash) {
      context.res = { status: 401, headers: HEADERS, body: { error: 'Invalid email or password.' } };
      return;
    }

    // Generate new session token
    const token = crypto.randomBytes(32).toString('hex');

    // Update token in storage
    const updateEntity = {
      PartitionKey: 'user',
      RowKey: email,
      name: user.name,
      salt: user.salt,
      passwordHash: user.passwordHash,
      token
    };

    await tableRequest('PUT', `/Users(PartitionKey='user',RowKey='${encodeURIComponent(email)}')`, updateEntity);

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { token, user: { name: user.name, email } }
    };
  } catch (err) {
    context.log.error('Login error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
