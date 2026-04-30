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

  const { name, email, password, phone } = req.body || {};

  if (!name) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'Full Name is required.' } };
    return;
  }

  if (!email && !phone) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'At least an email or phone number is required.' } };
    return;
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      context.res = { status: 400, headers: HEADERS, body: { error: 'Invalid email format.' } };
      return;
    }
  }

  if (!password || password.length < 6) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'Password must be at least 6 characters.' } };
    return;
  }

  // Use email as RowKey if available, otherwise use phone with prefix
  const rowKey = email || ('phone:' + phone.replace(/[^0-9+]/g, ''));

  try {
    // Check if user already exists
    const existing = await tableRequest('GET', `/users(PartitionKey='user',RowKey='${encodeURIComponent(rowKey)}')`);
    if (existing.status === 200) {
      context.res = { status: 409, headers: HEADERS, body: { error: 'An account with this email/phone already exists.' } };
      return;
    }

    // Hash password
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

    // Generate session token
    const token = crypto.randomBytes(32).toString('hex');

    // Store user
    const entity = {
      PartitionKey: 'user',
      RowKey: rowKey,
      name,
      email: email || '',
      phone: phone || '',
      salt,
      passwordHash: hash,
      token,
      courseAccess: ''
    };

    const result = await tableRequest('POST', '/users', entity);
    if (result.status >= 400) {
      context.log.error('Table insert failed:', result.status, JSON.stringify(result.body));
      context.res = { status: 500, headers: HEADERS, body: { error: 'Failed to create account.' } };
      return;
    }

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { token, user: { name, email: email || '', phone: phone || '', courseAccess: '' } }
    };
  } catch (err) {
    context.log.error('Signup error:', err.message, err.stack);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Signup error: ' + err.message } };
  }
};
