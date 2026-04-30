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

  // Admin auth
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

    // Parse days param (default 7, max 30)
    let days = parseInt(req.query.days) || 7;
    if (days < 1) days = 1;
    if (days > 30) days = 30;

    // Build date range
    const now = new Date();
    const dates = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      dates.push(d.toISOString().slice(0, 10));
    }

    // Query analytics for each date partition
    const allEvents = [];
    // Ensure analytics table exists before querying
    try { await tableRequest('POST', '/Tables', { TableName: 'analytics' }); } catch {}
    for (const date of dates) {
      try {
        const result = await tableRequest('GET', `/analytics()?$filter=PartitionKey eq '${date}'`);
        if (result.body && result.body.value) {
          allEvents.push(...result.body.value);
        }
      } catch { /* skip dates with no data */ }
    }

    // Aggregate summary
    const summary = {
      totalPageViews: 0,
      totalSignups: 0,
      totalLogins: 0,
      totalCourseStarts: 0,
      totalLessonStarts: 0,
      totalNarrationPlays: 0,
      totalBuyPageViews: 0,
      uniqueVisitors: 0,
      totalRegisteredUsers: users.length,
      usersWithAccess: users.filter(u => u.courseAccess && u.courseAccess.trim()).length
    };

    const uniqueUserIds = new Set();
    const dailyMap = {};
    const lessonCounts = {};
    dates.forEach(d => { dailyMap[d] = { date: d, pageViews: 0, signups: 0, logins: 0, courseStarts: 0, lessonStarts: 0, narrationPlays: 0, buyPageViews: 0 }; });

    allEvents.forEach(ev => {
      const eventName = ev.event;
      const day = ev.PartitionKey;
      if (ev.userId) uniqueUserIds.add(ev.userId);
      if (!dailyMap[day]) dailyMap[day] = { date: day, pageViews: 0, signups: 0, logins: 0, courseStarts: 0, lessonStarts: 0, narrationPlays: 0, buyPageViews: 0 };

      switch (eventName) {
        case 'page_view':
          summary.totalPageViews++;
          dailyMap[day].pageViews++;
          break;
        case 'signup':
          summary.totalSignups++;
          dailyMap[day].signups++;
          break;
        case 'login':
          summary.totalLogins++;
          dailyMap[day].logins++;
          break;
        case 'course_start':
          summary.totalCourseStarts++;
          dailyMap[day].courseStarts++;
          break;
        case 'lesson_start':
          summary.totalLessonStarts++;
          dailyMap[day].lessonStarts++;
          try {
            const d = JSON.parse(ev.data || '{}');
            if (d.lessonId) lessonCounts[d.lessonId] = (lessonCounts[d.lessonId] || 0) + 1;
          } catch {}
          break;
        case 'narration_play':
          summary.totalNarrationPlays++;
          dailyMap[day].narrationPlays++;
          break;
        case 'buy_page_view':
          summary.totalBuyPageViews++;
          dailyMap[day].buyPageViews++;
          break;
      }
    });

    summary.uniqueVisitors = uniqueUserIds.size;

    const dailyBreakdown = dates.map(d => dailyMap[d]);

    const topLessons = Object.entries(lessonCounts)
      .map(([lessonId, views]) => ({ lessonId, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const recentEvents = allEvents
      .sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''))
      .slice(0, 20)
      .map(ev => ({
        event: ev.event,
        timestamp: ev.timestamp,
        userId: ev.userId,
        data: ev.data
      }));

    context.res = {
      status: 200,
      headers: HEADERS,
      body: { summary, dailyBreakdown, topLessons, recentEvents }
    };
  } catch (err) {
    context.log.error('Analytics error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Internal server error.' } };
  }
};
