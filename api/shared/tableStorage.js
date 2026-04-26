const crypto = require('crypto');
const https = require('https');

const CONN_STR = process.env.AZURE_STORAGE_CONNECTION_STRING;

function parseConnectionString(connStr) {
  const parts = {};
  connStr.split(';').forEach(part => {
    const [key, ...rest] = part.split('=');
    parts[key] = rest.join('=');
  });
  return parts;
}

function getAuthHeaders(accountName, accountKey, method, path, contentLength, contentType, date) {
  const stringToSign = [
    method,
    '',
    contentType || '',
    date,
    `/${accountName}${path}`
  ].join('\n');

  const hmac = crypto.createHmac('sha256', Buffer.from(accountKey, 'base64'));
  hmac.update(stringToSign, 'utf-8');
  const signature = hmac.digest('base64');

  return {
    'Authorization': `SharedKeyLite ${accountName}:${signature}`,
    'x-ms-date': date,
    'x-ms-version': '2020-12-06',
    'Accept': 'application/json;odata=nometadata',
    'Content-Type': contentType || 'application/json'
  };
}

function tableRequest(method, tablePath, body) {
  return new Promise((resolve, reject) => {
    const { AccountName, AccountKey } = parseConnectionString(CONN_STR);
    const date = new Date().toUTCString();
    const bodyStr = body ? JSON.stringify(body) : '';
    const contentType = body ? 'application/json' : '';
    const headers = getAuthHeaders(AccountName, AccountKey, method, tablePath, bodyStr.length, contentType, date);

    if (body) headers['Content-Length'] = Buffer.byteLength(bodyStr);
    if (method === 'PUT' || method === 'MERGE') headers['If-Match'] = '*';

    const options = {
      hostname: `${AccountName}.table.core.windows.net`,
      path: tablePath,
      method,
      headers
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let parsed = null;
        if (data) {
          try { parsed = JSON.parse(data); } catch (e) { parsed = null; }
        }
        resolve({ status: res.statusCode, body: parsed });
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

module.exports = { parseConnectionString, getAuthHeaders, tableRequest };
