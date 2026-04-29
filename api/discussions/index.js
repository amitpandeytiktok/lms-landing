const { tableRequest } = require('../shared/tableStorage');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token'
};

async function authenticate(req) {
  const token = req.headers['x-auth-token'] || '';
  if (!token) return null;
  const allUsers = await tableRequest('GET', '/users()');
  const users = (allUsers.body && allUsers.body.value) || [];
  return users.find(u => u.token === token) || null;
}

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const caller = await authenticate(req);
  if (!caller) {
    context.res = { status: 401, headers: HEADERS, body: { error: 'Unauthorized' } };
    return;
  }

  try {
    if (req.method === 'GET') {
      const courseId = (req.query && req.query.courseId) || '';
      if (!courseId) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'courseId is required' } };
        return;
      }
      const filter = encodeURIComponent("PartitionKey eq '" + courseId + "'");
      const result = await tableRequest('GET', '/discussions()?$filter=' + filter);
      const threads = ((result.body && result.body.value) || [])
        .map(t => ({
          threadId: t.RowKey,
          courseId: t.PartitionKey,
          title: t.title,
          body: t.body,
          authorEmail: t.authorEmail,
          authorName: t.authorName,
          createdAt: t.createdAt,
          replyCount: t.replyCount || 0,
          lastActivity: t.lastActivity || t.createdAt
        }))
        .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));

      context.res = { status: 200, headers: HEADERS, body: threads };
    } else if (req.method === 'POST') {
      const { courseId, title, body } = req.body || {};
      if (!courseId || !title || !body) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'courseId, title, and body are required' } };
        return;
      }
      const now = new Date().toISOString();
      const rowKey = Date.now() + '-' + Math.random().toString(36).substring(2, 8);
      const entity = {
        PartitionKey: courseId,
        RowKey: rowKey,
        title,
        body,
        authorEmail: caller.RowKey,
        authorName: caller.name || caller.RowKey,
        createdAt: now,
        replyCount: 0,
        lastActivity: now
      };
      await tableRequest('POST', '/discussions', entity);
      context.res = { status: 201, headers: HEADERS, body: entity };
    }
  } catch (err) {
    context.log.error('Discussions error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error' } };
  }
};
