const crypto = require('crypto');
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

    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Name, email, and password are required.' } };
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Invalid email format.' } };
      return;
    }

    // Check if user already exists
    const existing = await tableRequest('GET', `/users(PartitionKey='user',RowKey='${encodeURIComponent(email)}')`);
    if (existing.status === 200) {
      context.res = { status: 409, headers: HEADERS, body: { error: 'An account with this email already exists.' } };
      return;
    }

    // Hash password (same as signup)
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    const userToken = crypto.randomBytes(32).toString('hex');

    const entity = {
      PartitionKey: 'user',
      RowKey: email,
      name,
      salt,
      passwordHash: hash,
      token: userToken,
      courseAccess: ''
    };

    const result = await tableRequest('POST', '/users', entity);
    if (result.status >= 400) {
      context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to create account.' } };
      return;
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { success: true, user: { name, email } }
    };
  } catch (err) {
    context.log.error('Enroll student error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
