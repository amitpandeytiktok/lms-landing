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

function tableRequest(method, tablePath, body) {
  return new Promise((resolve, reject) => {
    const { AccountName, AccountKey } = parseConnectionString(CONN_STR);
    const date = new Date().toUTCString();
    const bodyStr = body ? JSON.stringify(body) : '';

    // SharedKeyLite for Table: stringToSign = Date\n/account/path (no query)
    const pathOnly = tablePath.split('?')[0];
    const stringToSign = `${date}\n/${AccountName}${pathOnly}`;

    const hmac = crypto.createHmac('sha256', Buffer.from(AccountKey, 'base64'));
    hmac.update(stringToSign, 'utf-8');
    const signature = hmac.digest('base64');

    const headers = {
      'Authorization': `SharedKeyLite ${AccountName}:${signature}`,
      'x-ms-date': date,
      'x-ms-version': '2020-12-06',
      'Accept': 'application/json;odata=nometadata',
      'DataServiceVersion': '3.0;NetFx'
    };

    if (bodyStr) {
      headers['Content-Type'] = 'application/json';
      headers['Content-Length'] = Buffer.byteLength(bodyStr);
    }
    if (method === 'PUT' || method === 'MERGE') {
      headers['If-Match'] = '*';
    }

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

module.exports = { parseConnectionString, tableRequest };
