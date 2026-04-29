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
      const threadId = (req.query && req.query.threadId) || '';
      if (!threadId) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'threadId is required' } };
        return;
      }
      const filter = encodeURIComponent("PartitionKey eq '" + threadId + "'");
      const result = await tableRequest('GET', '/replies()?$filter=' + filter);
      const replies = ((result.body && result.body.value) || [])
        .map(r => ({
          replyId: r.RowKey,
          threadId: r.PartitionKey,
          body: r.body,
          authorEmail: r.authorEmail,
          authorName: r.authorName,
          createdAt: r.createdAt
        }))
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      context.res = { status: 200, headers: HEADERS, body: replies };
    } else if (req.method === 'POST') {
      const { threadId, courseId, body } = req.body || {};
      if (!threadId || !courseId || !body) {
        context.res = { status: 400, headers: HEADERS, body: { error: 'threadId, courseId, and body are required' } };
        return;
      }
      const now = new Date().toISOString();
      const rowKey = Date.now() + '-' + Math.random().toString(36).substring(2, 8);
      const entity = {
        PartitionKey: threadId,
        RowKey: rowKey,
        body,
        authorEmail: caller.RowKey,
        authorName: caller.name || caller.RowKey,
        createdAt: now
      };
      await tableRequest('POST', '/replies', entity);

      // Update parent discussion replyCount and lastActivity
      const threadFilter = encodeURIComponent("RowKey eq '" + threadId + "'");
      const threadResult = await tableRequest('GET', '/discussions()?$filter=' + threadFilter);
      const threads = (threadResult.body && threadResult.body.value) || [];
      if (threads.length > 0) {
        const thread = threads[0];
        await tableRequest('MERGE', "/discussions(PartitionKey='" + encodeURIComponent(thread.PartitionKey) + "',RowKey='" + encodeURIComponent(threadId) + "')", {
          PartitionKey: thread.PartitionKey,
          RowKey: threadId,
          replyCount: (thread.replyCount || 0) + 1,
          lastActivity: now
        });
      }

      context.res = { status: 201, headers: HEADERS, body: entity };
    }
  } catch (err) {
    context.log.error('Replies error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error' } };
  }
};
