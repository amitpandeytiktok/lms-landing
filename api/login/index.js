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

  const { email: emailOrPhone, password } = req.body || {};

  if (!emailOrPhone || !password) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'Email/phone and password are required.' } };
    return;
  }

  // Determine if this is a phone-based login
  const isPhone = /^[\+\d\s\-\(\)]+$/.test(emailOrPhone) && !emailOrPhone.includes('@');
  const rowKey = isPhone ? 'phone:' + emailOrPhone.replace(/[^0-9+]/g, '') : emailOrPhone;

  try {
    // Look up user
    const result = await tableRequest('GET', `/users(PartitionKey='user',RowKey='${encodeURIComponent(rowKey)}')`);
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
      RowKey: rowKey,
      name: user.name,
      email: user.email || '',
      phone: user.phone || '',
      salt: user.salt,
      passwordHash: user.passwordHash,
      token,
      courseAccess: user.courseAccess || ''
    };

    await tableRequest('PUT', `/users(PartitionKey='user',RowKey='${encodeURIComponent(rowKey)}')`, updateEntity);

    // Merge batch-based course access
    let mergedAccess = user.courseAccess || '';
    try {
      // Ensure batchmembers table exists
      await tableRequest('POST', '/Tables', { TableName: 'batchmembers' });
      await tableRequest('POST', '/Tables', { TableName: 'batches' });

      // Find batch memberships for this user
      const membershipsResult = await tableRequest('GET', `/batchmembers()?$filter=RowKey eq '${encodeURIComponent(rowKey)}'`);
      const memberships = (membershipsResult.body && membershipsResult.body.value) || [];

      if (memberships.length > 0) {
        // Get all batches to check expiry and courses
        const batchesResult = await tableRequest('GET', '/batches()');
        const batches = (batchesResult.body && batchesResult.body.value) || [];
        const batchMap = {};
        batches.forEach(b => { batchMap[b.RowKey] = b; });

        const now = new Date();
        const accessSet = new Set(mergedAccess.split(',').map(s => s.trim()).filter(Boolean));

        memberships.forEach(m => {
          const batch = batchMap[m.PartitionKey];
          if (batch && new Date(batch.expiresAt) > now) {
            (batch.courses || '').split(',').map(s => s.trim()).filter(Boolean).forEach(c => accessSet.add(c));
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
      body: { token, user: { name: user.name, email: user.email || '', phone: user.phone || '', courseAccess: mergedAccess } }
    };
  } catch (err) {
    context.log.error('Login error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
