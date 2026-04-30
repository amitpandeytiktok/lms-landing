/* ============================================
   LMS Application — app.js
   ============================================ */

// --------------- STATE ---------------
const state = {
  currentView: 'dashboard',
  currentWeekId: null,
  currentLessonId: null,
  currentSlide: 0,
  currentTab: 'overview',
  progress: {},
  currentUser: null
};

// --------------- AUTH ---------------
let authMode = 'login';

// --------------- ANALYTICS TRACKING ---------------
const trackEvent = (event, data = {}) => {
  try {
    const token = localStorage.getItem('lms_token') || '';
    const payload = JSON.stringify({ event, data });
    const headers = { type: 'application/json' };
    const blob = new Blob([payload], headers);
    if (navigator.sendBeacon) {
      if (token) {
        fetch('/api/trackevent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
          body: payload,
          keepalive: true
        }).catch(() => {});
      } else {
        navigator.sendBeacon('/api/trackevent', blob);
      }
    } else {
      fetch('/api/trackevent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { 'X-Auth-Token': token } : {}) },
        body: payload,
        keepalive: true
      }).catch(() => {});
    }
  } catch { /* never block UI */ }
};

const showAuthModal = (mode) => {
  authMode = mode || 'login';
  const modal = byId('auth-modal');
  modal.style.display = 'flex';
  updateAuthModalUI();
  setTimeout(() => byId(authMode === 'signup' ? 'auth-name' : 'auth-email').focus(), 100);
};

const hideAuthModal = () => {
  byId('auth-modal').style.display = 'none';
  byId('auth-error').style.display = 'none';
  byId('auth-form').reset();
};

const updateAuthModalUI = () => {
  const isSignup = authMode === 'signup';
  byId('auth-modal-title').textContent = isSignup ? 'Create Account' : 'Welcome Back';
  byId('auth-modal-subtitle').textContent = isSignup ? 'Join Techwave Global AI Academy' : 'Sign in to continue your AI journey';
  byId('name-field').style.display = isSignup ? '' : 'none';
  byId('phone-field').style.display = isSignup ? '' : 'none';
  byId('auth-submit-text').textContent = isSignup ? 'Create Account' : 'Sign In';
  byId('auth-error').style.display = 'none';
  byId('auth-switch').innerHTML = isSignup
    ? '<span>Already have an account? <a href="#" onclick="toggleAuthMode(event)">Sign In</a></span>'
    : '<span>Don\'t have an account? <a href="#" onclick="toggleAuthMode(event)">Sign Up</a></span>';

  if (isSignup) {
    byId('auth-name').setAttribute('required', '');
    byId('auth-email').removeAttribute('required');
    byId('auth-phone').removeAttribute('required');
  } else {
    byId('auth-name').removeAttribute('required');
    byId('auth-email').setAttribute('required', '');
  }
};

const toggleAuthMode = (e) => {
  if (e) e.preventDefault();
  authMode = authMode === 'login' ? 'signup' : 'login';
  updateAuthModalUI();
};

const showAuthError = (msg) => {
  const el = byId('auth-error');
  el.textContent = msg;
  el.style.display = 'block';
};

const handleAuth = async (e) => {
  e.preventDefault();
  const btn = byId('auth-submit-btn');
  const spinner = byId('auth-spinner');
  const text = byId('auth-submit-text');
  
  btn.disabled = true;
  spinner.style.display = 'inline-block';
  text.style.display = 'none';
  byId('auth-error').style.display = 'none';
  
  const email = byId('auth-email').value.trim();
  const password = byId('auth-password').value;
  const name = byId('auth-name').value.trim();
  const phone = byId('auth-phone') ? byId('auth-phone').value.trim() : '';
  
  if (authMode === 'signup') {
    if (!name) {
      showAuthError('Full Name is required.');
      btn.disabled = false; spinner.style.display = 'none'; text.style.display = 'inline';
      return;
    }
    if (!email && !phone) {
      showAuthError('Please provide at least an email or phone number.');
      btn.disabled = false; spinner.style.display = 'none'; text.style.display = 'inline';
      return;
    }
    if (password.length < 6) {
      showAuthError('Password must be at least 6 characters.');
      btn.disabled = false; spinner.style.display = 'none'; text.style.display = 'inline';
      return;
    }
  }
  
  const isSignup = authMode === 'signup';
  const endpoint = isSignup ? '/api/signup' : '/api/login';
  const body = isSignup ? { name, email, password, phone } : { email, password };
  
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      showAuthError(data.error || 'Something went wrong. Please try again.');
      return;
    }
    
    // Save session
    localStorage.setItem('lms_token', data.token);
    localStorage.setItem('lms_user', JSON.stringify(data.user));
    
    hideAuthModal();
    showAppView(data.user);
    trackEvent(isSignup ? 'signup' : 'login', { email: data.user.email });
    showToast(isSignup ? 'Welcome, ' + data.user.name + '! 🎉' : 'Welcome back, ' + data.user.name + '! 🎉', 'success');
  } catch (err) {
    showAuthError('Network error. Please check your connection.');
  } finally {
    btn.disabled = false;
    spinner.style.display = 'none';
    text.style.display = 'inline';
  }
};

const checkAuth = async () => {
  const token = localStorage.getItem('lms_token');
  const savedUser = localStorage.getItem('lms_user');
  
  if (token && savedUser) {
    try {
      const res = await fetch('/api/me', {
        headers: { 'X-Auth-Token': token }
      });
      if (res.ok) {
        const data = await res.json();
        showAppView(data.user);
        return data.user;
      }
    } catch (e) {
      // API not available (local dev) — use saved user
      if (savedUser) {
        showAppView(JSON.parse(savedUser));
        return JSON.parse(savedUser);
      }
    }
    // Token invalid — clear it
    localStorage.removeItem('lms_token');
    localStorage.removeItem('lms_user');
  }
  
  showLandingView();
  return null;
};

const logout = () => {
  localStorage.removeItem('lms_token');
  localStorage.removeItem('lms_user');
  document.body.classList.remove('app-mode');
  byId('dashboard-view').style.display = 'none';
  byId('course-view').style.display = 'none';
  byId('course-detail-view').style.display = 'none';
  byId('admin-view').style.display = 'none';
  byId('community-view').style.display = 'none';
  state.currentUser = null;
  const landing = byId('landing-view');
  if (landing) landing.style.display = '';
  // Restore nav
  const navLinks = byId('nav-links');
  if (navLinks) navLinks.style.display = '';
  const section = byId('auth-section');
  section.innerHTML = `
    <button class="login-btn" id="login-btn" onclick="showAuthModal('login')">
      <i class="fas fa-sign-in-alt"></i> Sign In
    </button>
    <button class="signup-btn" id="signup-btn" onclick="showAuthModal('signup')">
      <i class="fas fa-user-plus"></i> Sign Up
    </button>
  `;
  showToast('Signed out successfully', 'success');
};

const showAppView = (user) => {
  state.currentUser = user;
  document.body.classList.add('app-mode');
  const landing = byId('landing-view');
  if (landing) landing.style.display = 'none';
  byId('dashboard-view').style.display = '';
  
  // Update nav for app mode
  const navLinks = byId('nav-links');
  if (navLinks) navLinks.style.display = 'none';
  
  // Update auth section with user info
  const section = byId('auth-section');
  const initials = (user.name || 'U').substring(0, 2).toUpperCase();
  section.innerHTML = `
    <div class="user-info">
      <div class="user-avatar">${initials}</div>
      <span class="user-name">${user.name || user.email}</span>
    </div>
    <button class="logout-btn" onclick="logout()">Sign Out</button>
  `;

  // Community button for all logged-in users
  const communityBtn = document.createElement('button');
  communityBtn.className = 'community-nav-btn';
  communityBtn.innerHTML = '<i class="fas fa-comments"></i> Community';
  communityBtn.onclick = navigateToCommunity;
  section.appendChild(communityBtn);

  // Show admin button if admin user
  if (user.email === 'officialtechwaveteam@gmail.com') {
    const adminBtn = document.createElement('button');
    adminBtn.className = 'admin-nav-btn';
    adminBtn.innerHTML = '<i class="fas fa-cog"></i> Admin';
    adminBtn.onclick = navigateToAdmin;
    section.appendChild(adminBtn);
  }
};

const showLandingView = () => {
  const landing = byId('landing-view');
  if (landing) landing.style.display = '';
  byId('dashboard-view').style.display = 'none';
  
  setupScrollReveal();
  
  window.addEventListener('scroll', () => {
    const nav = byId('main-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });
};

const setupScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// --------------- HELPERS ---------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const byId = (id) => document.getElementById(id);

const RESOURCE_ICONS = {
  article: '📄',
  video: '🎬',
  tool: '🔧',
  guide: '📖',
  default: '🔗'
};

// --------------- PROGRESS PERSISTENCE ---------------
const loadProgress = () => {
  try {
    const saved = localStorage.getItem('lms-progress');
    if (saved) state.progress = JSON.parse(saved);
  } catch { /* ignore */ }
};

const saveProgress = () => {
  localStorage.setItem('lms-progress', JSON.stringify(state.progress));
};

const getLessonProgress = (lessonId) => {
  if (!state.progress[lessonId]) {
    state.progress[lessonId] = { completed: false, saved: false, promptText: '', outputText: '' };
  }
  return state.progress[lessonId];
};

// --------------- WEEK / LESSON LOOKUPS ---------------
const findWeek = (weekId) => COURSE_DATA.weeks.find(w => w.id === weekId);

const getAllLessonsForWeek = (week) => {
  const lessons = [];
  week.modules.forEach(m => m.lessons.forEach(l => lessons.push(l)));
  return lessons;
};

const findLessonInWeek = (week, lessonId) => {
  for (const mod of week.modules) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
};

const getWeekProgress = (week) => {
  const lessons = getAllLessonsForWeek(week);
  if (lessons.length === 0) return 0;
  const completed = lessons.filter(l => state.progress[l.id]?.completed).length;
  return Math.round((completed / lessons.length) * 100);
};

const getFirstIncompleteLesson = (week) => {
  const lessons = getAllLessonsForWeek(week);
  return lessons.find(l => !state.progress[l.id]?.completed) || lessons[0];
};

// --------------- TOAST ---------------
const showToast = (message, type = 'success') => {
  const container = byId('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// ===============================================
//  DASHBOARD RENDERING
// ===============================================
// --------------- COURSE AGGREGATE HELPERS ---------------
const getCourseProgress = () => {
  const weeks = COURSE_DATA.weeks;
  let total = 0, completed = 0;
  weeks.forEach(w => {
    const lessons = getAllLessonsForWeek(w);
    total += lessons.length;
    completed += lessons.filter(l => state.progress[l.id]?.completed).length;
  });
  return total === 0 ? 0 : Math.round((completed / total) * 100);
};

const getCourseTotalLessons = () => {
  return COURSE_DATA.weeks.reduce((sum, w) => sum + getAllLessonsForWeek(w).length, 0);
};

const getCourseTotalTasks = () => {
  return COURSE_DATA.weeks.reduce((sum, w) => sum + (w.tasksCount ?? 0), 0);
};

// ===============================================
//  DASHBOARD – TWO SECTIONS: ENROLLED + EXPLORE
// ===============================================
const ALL_COURSES = [
  {
    id: 'ai-beginner',
    name: 'AI Bootcamp Course',
    description: 'Master AI fundamentals across ' + (typeof COURSE_DATA !== 'undefined' ? COURSE_DATA.weeks.length : 4) + ' weeks',
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1560 30%, #6c3ce0 65%, #a855f7 100%)',
    lessons: typeof COURSE_DATA !== 'undefined' ? getCourseTotalLessons() : 51,
    tasks: typeof COURSE_DATA !== 'undefined' ? getCourseTotalTasks() : 51,
    weeks: typeof COURSE_DATA !== 'undefined' ? COURSE_DATA.weeks.length : 4
  }
];

let pendingCourseAction = null; // stores courseId for modal

const renderDashboard = () => {
  const enrolledGrid = byId('enrolled-courses-grid');
  const exploreGrid = byId('explore-courses-grid');
  const isAdmin = state.currentUser && state.currentUser.email === 'officialtechwaveteam@gmail.com';
  const access = (state.currentUser && state.currentUser.courseAccess) || '';
  const enrolledCourses = access.split(',').map(s => s.trim()).filter(Boolean);

  const enrolled = isAdmin ? ALL_COURSES : ALL_COURSES.filter(c => enrolledCourses.includes(c.id));
  const locked = isAdmin ? [] : ALL_COURSES.filter(c => !enrolledCourses.includes(c.id));

  // Enrolled section
  const enrolledSection = byId('enrolled-courses-section');
  if (enrolled.length === 0) {
    enrolledGrid.innerHTML = '<p class="empty-courses-msg">You haven\'t enrolled in any courses yet. Use a batch code or express interest below!</p>';
  } else {
    enrolledGrid.innerHTML = enrolled.map(c => {
      const pct = c.id === 'ai-beginner' ? getCourseProgress() : 0;
      const fillClass = pct === 100 ? 'green' : 'blue';
      return `
        <div class="course-card" data-course="${c.id}">
          <div class="card-image" style="background:${c.gradient}">
            <span class="card-emoji">${c.emoji}</span>
            <span class="course-badge enrolled-badge"><i class="fas fa-check-circle"></i> Enrolled</span>
          </div>
          <div class="card-info">
            <div class="card-week-title">${c.name}</div>
            <div class="card-course-name">${c.description}</div>
            <div class="progress-wrapper">
              <div class="progress-label"><span>Progress</span><span>${pct}%</span></div>
              <div class="progress-bar"><div class="progress-fill ${fillClass}" style="width:${pct}%"></div></div>
            </div>
            <div class="card-meta">
              <span><i class="fas fa-book-open"></i> ${c.lessons} lessons</span>
              <span><i class="fas fa-tasks"></i> ${c.tasks} tasks</span>
              <span><i class="fas fa-calendar-week"></i> ${c.weeks} weeks</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  // Explore (locked) section
  const exploreSection = byId('explore-courses-section');
  if (locked.length === 0) {
    exploreSection.style.display = 'none';
  } else {
    exploreSection.style.display = '';
    exploreGrid.innerHTML = locked.map(c => `
      <div class="course-card locked-card" data-course="${c.id}" onclick="showCourseActionModal('${c.id}', '${c.name.replace(/'/g, "\\'")}')">
        <div class="card-image" style="background:${c.gradient}">
          <span class="card-emoji">${c.emoji}</span>
          <span class="course-badge locked-badge"><i class="fas fa-lock"></i> Locked</span>
        </div>
        <div class="card-info">
          <div class="card-week-title">${c.name}</div>
          <div class="card-course-name">${c.description}</div>
          <div class="card-meta">
            <span><i class="fas fa-book-open"></i> ${c.lessons} lessons</span>
            <span><i class="fas fa-tasks"></i> ${c.tasks} tasks</span>
            <span><i class="fas fa-calendar-week"></i> ${c.weeks} weeks</span>
          </div>
        </div>
      </div>`).join('');
  }
};

// ===============================================
//  COURSE ACTION MODAL (Batch Code / Interest)
// ===============================================
const showCourseActionModal = (courseId, courseName) => {
  pendingCourseAction = { courseId, courseName };
  byId('course-action-title').textContent = courseName || 'Course Access';
  byId('course-action-subtitle').textContent = 'Choose how to get access to this course';
  byId('modal-batch-code').value = '';
  byId('modal-enroll-error').style.display = 'none';
  byId('modal-interest-error').style.display = 'none';

  // Pre-fill interest fields with user data
  const user = state.currentUser || {};
  byId('modal-interest-name').value = user.name || '';
  byId('modal-interest-email').value = user.email || '';
  byId('modal-interest-phone').value = user.phone || '';

  byId('course-action-modal').style.display = 'flex';
};

const hideCourseActionModal = () => {
  byId('course-action-modal').style.display = 'none';
  pendingCourseAction = null;
};

const enrollFromModal = async () => {
  const code = byId('modal-batch-code').value.trim();
  if (!code) {
    byId('modal-enroll-error').textContent = 'Please enter a batch code.';
    byId('modal-enroll-error').style.display = 'block';
    return;
  }
  await doEnrollWithCode(code);
};

const enrollWithBatchCode = async () => {
  const code = byId('dashboard-batch-code').value.trim();
  if (!code) {
    showToast('Please enter a batch code.', 'error');
    return;
  }
  await doEnrollWithCode(code);
};

const doEnrollWithCode = async (code) => {
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/enrollbatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ batchCode: code })
    });
    const data = await res.json();
    if (!res.ok) {
      const errMsg = data.error || 'Enrollment failed.';
      // Show in modal if open, otherwise toast
      const modalErr = byId('modal-enroll-error');
      if (byId('course-action-modal').style.display === 'flex' && modalErr) {
        modalErr.textContent = errMsg;
        modalErr.style.display = 'block';
      } else {
        showToast(errMsg, 'error');
      }
      return;
    }

    // Success — update user's courseAccess locally
    if (data.courseId && state.currentUser) {
      const currentAccess = (state.currentUser.courseAccess || '').split(',').map(s => s.trim()).filter(Boolean);
      if (!currentAccess.includes(data.courseId)) {
        currentAccess.push(data.courseId);
        state.currentUser.courseAccess = currentAccess.join(',');
        localStorage.setItem('lms_user', JSON.stringify(state.currentUser));
      }
    }

    hideCourseActionModal();
    byId('dashboard-batch-code').value = '';
    showToast(data.message || 'Successfully enrolled! 🎉', 'success');
    renderDashboard();
  } catch (err) {
    showToast('Network error. Please try again.', 'error');
  }
};

const submitCourseInterest = async () => {
  if (!pendingCourseAction) return;
  const name = byId('modal-interest-name').value.trim();
  const email = byId('modal-interest-email').value.trim();
  const phone = byId('modal-interest-phone').value.trim();

  if (!email && !phone) {
    byId('modal-interest-error').textContent = 'Please provide at least an email or phone number.';
    byId('modal-interest-error').style.display = 'block';
    return;
  }

  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/courseinterest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({
        courseId: pendingCourseAction.courseId,
        courseName: pendingCourseAction.courseName,
        name, email, phone
      })
    });
    const data = await res.json();
    if (!res.ok) {
      byId('modal-interest-error').textContent = data.error || 'Failed to submit.';
      byId('modal-interest-error').style.display = 'block';
      return;
    }
    hideCourseActionModal();
    showToast('Interest submitted! We\'ll contact you soon. 🎉', 'success');
  } catch (err) {
    showToast('Network error. Please try again.', 'error');
  }
};

// ===============================================
//  COURSE DETAIL – WEEK TILES
// ===============================================
const renderCourseDetail = () => {
  const grid = byId('weeks-grid');
  grid.innerHTML = COURSE_DATA.weeks.map(week => {
    const pct = getWeekProgress(week);
    const fillClass = pct === 100 ? 'green' : 'blue';
    return `
      <div class="course-card" data-week-id="${week.id}">
        <div class="card-image" style="background:${week.gradient || 'linear-gradient(135deg,#6c3ce0,#a855f7)'}">
          <span class="card-emoji">${week.emoji || '📚'}</span>
        </div>
        <div class="card-info">
          <div class="card-week-title">${week.title}</div>
          <div class="card-course-name">${week.name || ''}</div>
          <div class="progress-wrapper">
            <div class="progress-label"><span>Progress</span><span>${pct}%</span></div>
            <div class="progress-bar"><div class="progress-fill ${fillClass}" style="width:${pct}%"></div></div>
          </div>
          <div class="card-meta">
            <span><i class="fas fa-book-open"></i> ${week.lessonsCount ?? getAllLessonsForWeek(week).length} lessons</span>
            <span><i class="fas fa-tasks"></i> ${week.tasksCount ?? 0} tasks</span>
          </div>
        </div>
      </div>`;
  }).join('');
};

const hideAllViews = () => {
  ['dashboard-view', 'course-detail-view', 'course-view', 'admin-view', 'community-view'].forEach(id => {
    const el = byId(id);
    if (el) el.style.display = 'none';
  });
};

const navigateToCourseDetail = () => {
  const isAdmin = state.currentUser && state.currentUser.email === 'officialtechwaveteam@gmail.com';
  const access = (state.currentUser && state.currentUser.courseAccess) || '';
  if (!isAdmin && !access.split(',').map(s => s.trim()).includes('ai-beginner')) {
    showToast('You do not have access to this course. Please contact your administrator.', 'error');
    return;
  }
  state.currentView = 'course-detail';
  hideAllViews();
  byId('course-detail-view').style.display = 'block';
  renderCourseDetail();
  trackEvent('course_start');
};

// ===============================================
//  COURSE VIEW RENDERING
// ===============================================
const navigateToCourse = (weekId) => {
  const week = findWeek(weekId);
  if (!week) return;
  state.currentView = 'course';
  state.currentWeekId = weekId;
  hideAllViews();
  byId('course-view').style.display = 'block';
  renderSidebar(week);
  const firstLesson = getFirstIncompleteLesson(week);
  if (firstLesson) renderLesson(firstLesson.id);
};

const navigateToDashboard = () => {
  state.currentView = 'dashboard';
  state.currentWeekId = null;
  state.currentLessonId = null;
  hideAllViews();
  byId('dashboard-view').style.display = 'block';
  renderDashboard();
};

const navigateHome = () => {
  if (state.currentUser) {
    navigateToDashboard();
  } else {
    byId('landing-view').style.display = '';
    hideAllViews();
    window.scrollTo(0, 0);
  }
};

const switchAdminTab = (btn) => {
  // Update sidebar buttons
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  // Update panels
  document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
  const panel = byId(btn.dataset.tab);
  if (panel) panel.classList.add('active');
};

const navigateToAdmin = () => {
  state.currentView = 'admin';
  hideAllViews();
  byId('admin-view').style.display = 'block';
  renderAdminView();
  loadAnalytics();
  loadLeads();
  loadBatches();
  loadCourseInterests();
};

const renderAdminView = async () => {
  const container = byId('admin-users-list');
  container.innerHTML = '<p style="text-align:center;padding:20px;">Loading users...</p>';
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/listusers', {
      headers: { 'X-Auth-Token': token }
    });
    if (!res.ok) throw new Error('Failed to fetch users');
    const data = await res.json();
    const users = data.users || [];
    if (users.length === 0) {
      container.innerHTML = '<p style="text-align:center;padding:20px;">No users found.</p>';
      return;
    }
    let html = `<table class="admin-user-table">
      <thead><tr><th>Name</th><th>Email</th><th>Course Access</th><th>Actions</th></tr></thead><tbody>`;
    users.forEach(u => {
      const hasAccess = u.courseAccess && u.courseAccess.split(',').map(s => s.trim()).includes('ai-beginner');
      html += `<tr>
        <td>${u.name || '—'}</td>
        <td>${u.email}</td>
        <td>${hasAccess ? '<span class="access-yes">✅ AI Bootcamp</span>' : '<span class="access-no">❌ No access</span>'}</td>
        <td>${hasAccess
          ? `<button class="revoke-btn" onclick="adminRevokeAccess('${u.email}')">Revoke</button>`
          : `<button class="grant-btn" onclick="adminGrantAccessFor('${u.email}')">Grant</button>`
        }</td>
      </tr>`;
    });
    html += '</tbody></table>';
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = '<p style="color:red;text-align:center;padding:20px;">Error loading users.</p>';
  }
};

const adminGrantAccess = async () => {
  const email = byId('admin-email-input').value.trim();
  if (!email) { showToast('Please enter an email', 'error'); return; }
  await adminGrantAccessFor(email);
  byId('admin-email-input').value = '';
};

const adminGrantAccessFor = async (email) => {
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/grantaccess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ email, courseId: 'ai-beginner' })
    });
    if (!res.ok) throw new Error('Failed');
    showToast(`Access granted to ${email}`, 'success');
    renderAdminView();
  } catch (err) {
    showToast('Failed to grant access', 'error');
  }
};

const adminRevokeAccess = async (email) => {
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/revokeaccess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ email, courseId: 'ai-beginner' })
    });
    if (!res.ok) throw new Error('Failed');
    showToast(`Access revoked for ${email}`, 'success');
    renderAdminView();
  } catch (err) {
    showToast('Failed to revoke access', 'error');
  }
};

// --------------- ENROLLMENT & BATCH MANAGEMENT ---------------

let cachedUsers = null;

const loadRegisteredUsers = async () => {
  if (cachedUsers) return cachedUsers;
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/listusers', { headers: { 'X-Auth-Token': token } });
    if (!res.ok) return [];
    const data = await res.json();
    cachedUsers = data.users || [];
    return cachedUsers;
  } catch { return []; }
};

const invalidateUserCache = () => { cachedUsers = null; };

// --------------- LEADS MANAGEMENT ---------------
const loadLeads = async () => {
  const container = byId('admin-leads-list');
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/listleads', {
      headers: { 'X-Auth-Token': token }
    });
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    const leads = data.leads || [];
    if (leads.length === 0) {
      container.innerHTML = '<p style="text-align:center;padding:20px;color:#888;">No submissions yet.</p>';
      return;
    }
    container.innerHTML = `
      <table class="admin-table" style="width:100%">
        <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Date</th></tr></thead>
        <tbody>${leads.map(l => `
          <tr>
            <td>${l.name || '—'}</td>
            <td>${l.email || '—'}</td>
            <td>${l.phone || '—'}</td>
            <td>${l.createdAt ? new Date(l.createdAt).toLocaleDateString() : '—'}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      <p style="text-align:right;padding:8px;color:#888;font-size:0.85rem;">${leads.length} total submission${leads.length !== 1 ? 's' : ''}</p>`;
  } catch {
    container.innerHTML = '<p style="color:#ff6b6b;text-align:center;padding:20px;">Error loading leads.</p>';
  }
};

// --------------- COURSE INTEREST MANAGEMENT ---------------
const loadCourseInterests = async () => {
  const container = byId('admin-course-interests');
  if (!container) return;
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/courseinterest', {
      headers: { 'X-Auth-Token': token }
    });
    if (!res.ok) throw new Error('Failed');
    const interests = await res.json();
    if (!interests || interests.length === 0) {
      container.innerHTML = '<p style="text-align:center;padding:20px;color:#888;">No course interest requests yet.</p>';
      return;
    }
    container.innerHTML = `
      <table class="admin-table" style="width:100%">
        <thead><tr><th>Student</th><th>Course</th><th>Email</th><th>Phone</th><th>Date</th><th></th></tr></thead>
        <tbody>${interests.map(i => `
          <tr>
            <td>${i.studentName || '—'}</td>
            <td>${i.courseName || i.courseId}</td>
            <td>${i.contactEmail || i.studentEmail || '—'}</td>
            <td>${i.contactPhone || '—'}</td>
            <td>${i.createdAt ? new Date(i.createdAt).toLocaleDateString() : '—'}</td>
            <td><button class="revoke-btn" onclick="deleteCourseInterest('${i.partitionKey}','${i.rowKey}')"><i class="fas fa-trash"></i></button></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <p style="text-align:right;padding:8px;color:#888;font-size:0.85rem;">${interests.length} request${interests.length !== 1 ? 's' : ''}</p>`;
  } catch {
    container.innerHTML = '<p style="color:#ff6b6b;text-align:center;padding:20px;">Error loading course interests.</p>';
  }
};

const deleteCourseInterest = async (partitionKey, rowKey) => {
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/courseinterest', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ partitionKey, rowKey })
    });
    if (!res.ok) throw new Error('Failed');
    showToast('Interest request deleted', 'success');
    loadCourseInterests();
  } catch {
    showToast('Failed to delete', 'error');
  }
};

const adminCreateBatch = async () => {
  const name = byId('batch-name').value.trim();
  const batchCode = byId('batch-code').value.trim();
  const courseId = byId('batch-course').value;
  const maxSize = parseInt(byId('batch-max-size').value) || 30;
  const expiresAt = byId('batch-expiry').value;
  if (!name || !batchCode || !courseId || !expiresAt) {
    showToast('Please fill in all batch fields', 'error');
    return;
  }
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/createbatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ name, batchCode, courseId, maxSize, expiresAt: new Date(expiresAt).toISOString() })
    });
    const data = await res.json();
    if (!res.ok) { showToast(data.error || 'Failed to create batch', 'error'); return; }
    byId('batch-name').value = '';
    byId('batch-code').value = '';
    byId('batch-expiry').value = '';
    showToast('Batch created successfully!', 'success');
    loadBatches();
  } catch (err) {
    showToast('Failed to create batch', 'error');
  }
};

const loadBatches = async () => {
  const container = byId('batch-list');
  if (!container) return;
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/listbatches', { headers: { 'X-Auth-Token': token } });
    const data = await res.json();
    const batches = data.batches || [];
    if (batches.length === 0) {
      container.innerHTML = '<p style="text-align:center;padding:20px;color:#999;">No batches created yet.</p>';
      return;
    }
    let html = '<div class="batch-grid">';
    batches.forEach(b => {
      const isExpired = b.status === 'expired';
      const statusClass = isExpired ? 'batch-status-expired' : 'batch-status-active';
      const statusLabel = isExpired ? 'Expired' : 'Active';
      html += `
        <div class="batch-card" id="batch-card-${b.id}">
          <div class="batch-card-header">
            <h3>${b.name}</h3>
            <span class="batch-status ${statusClass}">${statusLabel}</span>
          </div>
          <div class="batch-card-info">
            <span><i class="fas fa-key"></i> Code: <strong>${b.batchCode || '—'}</strong></span>
            <span><i class="fas fa-book"></i> ${b.courseId || b.courses || '—'}</span>
            <span><i class="fas fa-calendar"></i> Expires: ${new Date(b.expiresAt).toLocaleDateString()}</span>
            <span><i class="fas fa-users"></i> ${b.enrolledCount || 0}/${b.maxSize || '∞'} enrolled (${b.memberCount} pre-approved)</span>
          </div>
          <div class="batch-card-actions">
            <button class="batch-toggle-btn" onclick="toggleBatchMembers('${b.id}')"><i class="fas fa-chevron-down"></i> Members</button>
            <div class="batch-add-member">
              <div class="batch-user-search-wrap">
                <input type="text" id="add-member-${b.id}" placeholder="Search by name, email or phone..." class="admin-input batch-member-input" autocomplete="off" oninput="showUserSuggestions('${b.id}', this.value)" onfocus="showUserSuggestions('${b.id}', this.value)">
                <div class="batch-user-suggestions" id="suggestions-${b.id}"></div>
              </div>
              <button class="grant-btn batch-add-btn" onclick="addBatchMember('${b.id}')"><i class="fas fa-user-plus"></i> Pre-approve</button>
            </div>
          </div>
          <div class="batch-members-list" id="batch-members-${b.id}" style="display:none"></div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = '<p style="color:red;text-align:center;padding:20px;">Error loading batches.</p>';
  }
};

const showUserSuggestions = async (batchId, query) => {
  const sugEl = byId(`suggestions-${batchId}`);
  if (!sugEl) return;
  if (!query || query.length < 1) { sugEl.innerHTML = ''; sugEl.style.display = 'none'; return; }
  const users = await loadRegisteredUsers();
  const q = query.toLowerCase();
  const matches = users.filter(u => {
    return (u.name && u.name.toLowerCase().includes(q)) ||
           (u.email && u.email.toLowerCase().includes(q)) ||
           (u.phone && u.phone.includes(q));
  }).slice(0, 8);
  if (matches.length === 0) { sugEl.innerHTML = '<div class="sug-empty">No matching users</div>'; sugEl.style.display = 'block'; return; }
  sugEl.innerHTML = matches.map(u => {
    const identifier = u.email || (u.phone ? 'phone:' + u.phone.replace(/[^0-9+]/g, '') : '');
    const label = `${u.name || '—'}` + (u.email ? ` · ${u.email}` : '') + (u.phone ? ` · ${u.phone}` : '');
    return `<div class="sug-item" onclick="selectUserForBatch('${batchId}', '${identifier.replace(/'/g, "\\'")}')">
      <span class="sug-name">${u.name || '—'}</span>
      <span class="sug-detail">${u.email || ''}${u.email && u.phone ? ' · ' : ''}${u.phone || ''}</span>
    </div>`;
  }).join('');
  sugEl.style.display = 'block';
};

const selectUserForBatch = (batchId, identifier) => {
  const input = byId(`add-member-${batchId}`);
  if (input) input.value = identifier;
  const sugEl = byId(`suggestions-${batchId}`);
  if (sugEl) { sugEl.innerHTML = ''; sugEl.style.display = 'none'; }
};

// Close suggestions on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.batch-user-search-wrap')) {
    document.querySelectorAll('.batch-user-suggestions').forEach(el => { el.innerHTML = ''; el.style.display = 'none'; });
  }
});

const toggleBatchMembers = async (batchId) => {
  const el = byId(`batch-members-${batchId}`);
  if (!el) return;
  if (el.style.display === 'none') {
    el.style.display = 'block';
    el.innerHTML = '<p style="padding:10px;color:#999;">Loading...</p>';
    try {
      const token = localStorage.getItem('lms_token');
      const res = await fetch(`/api/batchmembers?batchId=${encodeURIComponent(batchId)}`, { headers: { 'X-Auth-Token': token } });
      const data = await res.json();
      const members = data.members || [];
      if (members.length === 0) {
        el.innerHTML = '<p style="padding:10px;color:#999;">No members in this batch.</p>';
        return;
      }
      let html = '<table class="batch-members-table"><thead><tr><th>Name</th><th>Email/Phone</th><th>Status</th><th>Added</th><th></th></tr></thead><tbody>';
      members.forEach(m => {
        const enrolled = m.enrolled === true || m.enrolled === 'true';
        const statusHtml = enrolled
          ? '<span class="member-status enrolled"><i class="fas fa-check-circle"></i> Enrolled</span>'
          : '<span class="member-status pre-approved"><i class="fas fa-clock"></i> Pre-approved</span>';
        html += `<tr>
          <td>${m.studentName || '—'}</td>
          <td>${m.email}</td>
          <td>${statusHtml}</td>
          <td>${m.addedAt ? new Date(m.addedAt).toLocaleDateString() : '—'}</td>
          <td><button class="revoke-btn batch-remove-btn" onclick="removeBatchMember('${batchId}','${m.email}')"><i class="fas fa-times"></i></button></td>
        </tr>`;
      });
      html += '</tbody></table>';
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = '<p style="color:red;padding:10px;">Error loading members.</p>';
    }
  } else {
    el.style.display = 'none';
  }
};

const addBatchMember = async (batchId) => {
  const input = byId(`add-member-${batchId}`);
  const identifier = input ? input.value.trim() : '';
  if (!identifier) { showToast('Please search and select a student', 'error'); return; }
  // Look up name from cached users
  const users = await loadRegisteredUsers();
  const found = users.find(u => u.email === identifier || ('phone:' + (u.phone || '').replace(/[^0-9+]/g, '')) === identifier);
  const studentName = found ? found.name : '';
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/batchmembers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ batchId, email: identifier, studentName })
    });
    const data = await res.json();
    if (!res.ok) { showToast(data.error || 'Failed to add member', 'error'); return; }
    if (input) input.value = '';
    showToast(`${identifier} added to batch`, 'success');
    // Refresh members list if open
    const membersEl = byId(`batch-members-${batchId}`);
    if (membersEl && membersEl.style.display !== 'none') {
      membersEl.style.display = 'none';
      toggleBatchMembers(batchId);
    }
    loadBatches();
  } catch (err) {
    showToast('Failed to add member', 'error');
  }
};

const removeBatchMember = async (batchId, email) => {
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/batchmembers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ action: 'remove', batchId, email })
    });
    if (!res.ok) throw new Error('Failed');
    showToast(`${email} removed from batch`, 'success');
    const membersEl = byId(`batch-members-${batchId}`);
    if (membersEl && membersEl.style.display !== 'none') {
      membersEl.style.display = 'none';
      toggleBatchMembers(batchId);
    }
    loadBatches();
  } catch (err) {
    showToast('Failed to remove member', 'error');
  }
};

// --------------- ANALYTICS DASHBOARD ---------------
const loadAnalytics = async () => {
  const summaryEl = byId('analytics-summary');
  const chartEl = byId('analytics-chart');
  const lessonsEl = byId('analytics-top-lessons');
  const recentEl = byId('analytics-recent');
  summaryEl.innerHTML = '<p style="text-align:center;padding:20px;grid-column:1/-1;">Loading analytics...</p>';
  chartEl.innerHTML = '';
  lessonsEl.innerHTML = '';
  recentEl.innerHTML = '';

  try {
    const token = localStorage.getItem('lms_token');
    const days = byId('analytics-days').value || 7;
    const res = await fetch(`/api/analytics?days=${days}`, {
      headers: { 'X-Auth-Token': token }
    });
    if (!res.ok) throw new Error('Failed to fetch analytics');
    const data = await res.json();
    renderAnalyticsSummary(data.summary);
    renderAnalyticsChart(data.dailyBreakdown);
    renderTopLessons(data.topLessons);
    renderRecentActivity(data.recentEvents);
  } catch (err) {
    summaryEl.innerHTML = '<p style="color:#ff6b6b;text-align:center;padding:20px;grid-column:1/-1;">Error loading analytics.</p>';
  }
};

const renderAnalyticsSummary = (s) => {
  const cards = [
    { label: 'Page Views', value: s.totalPageViews, icon: 'fa-eye', color: '#6c3ce0' },
    { label: 'Signups', value: s.totalSignups, icon: 'fa-user-plus', color: '#10b981' },
    { label: 'Logins', value: s.totalLogins, icon: 'fa-sign-in-alt', color: '#3b82f6' },
    { label: 'Course Starts', value: s.totalCourseStarts, icon: 'fa-play-circle', color: '#f59e0b' },
    { label: 'Lesson Views', value: s.totalLessonStarts, icon: 'fa-book-open', color: '#ec4899' },
    { label: 'Narrations', value: s.totalNarrationPlays, icon: 'fa-headphones', color: '#8b5cf6' },
    { label: 'Unique Visitors', value: s.uniqueVisitors, icon: 'fa-users', color: '#06b6d4' },
    { label: 'Registered Users', value: s.totalRegisteredUsers, icon: 'fa-user-check', color: '#14b8a6' },
    { label: 'With Access', value: s.usersWithAccess, icon: 'fa-unlock', color: '#a855f7' }
  ];
  byId('analytics-summary').innerHTML = cards.map(c => `
    <div class="analytics-card" style="border-left: 4px solid ${c.color}">
      <div class="analytics-card-icon" style="color:${c.color}"><i class="fas ${c.icon}"></i></div>
      <div class="analytics-card-value">${c.value.toLocaleString()}</div>
      <div class="analytics-card-label">${c.label}</div>
    </div>
  `).join('');
};

const renderAnalyticsChart = (daily) => {
  const chartEl = byId('analytics-chart');
  if (!daily || daily.length === 0) { chartEl.innerHTML = '<p>No data</p>'; return; }
  const maxViews = Math.max(...daily.map(d => d.pageViews), 1);
  chartEl.innerHTML = daily.map(d => {
    const pct = Math.max((d.pageViews / maxViews) * 100, 2);
    const dateLabel = d.date.slice(5); // MM-DD
    return `
      <div class="analytics-bar-col">
        <div class="analytics-bar-value">${d.pageViews}</div>
        <div class="analytics-bar" style="height:${pct}%"></div>
        <div class="analytics-bar-label">${dateLabel}</div>
      </div>
    `;
  }).join('');
};

const renderTopLessons = (lessons) => {
  const el = byId('analytics-top-lessons');
  if (!lessons || lessons.length === 0) { el.innerHTML = '<p class="analytics-empty">No lesson data yet</p>'; return; }
  el.innerHTML = `<table class="analytics-table">
    <thead><tr><th>Lesson</th><th>Views</th></tr></thead>
    <tbody>${lessons.map(l => `<tr><td>${l.lessonId}</td><td>${l.views}</td></tr>`).join('')}</tbody>
  </table>`;
};

const renderRecentActivity = (events) => {
  const el = byId('analytics-recent');
  if (!events || events.length === 0) { el.innerHTML = '<p class="analytics-empty">No recent events</p>'; return; }
  const badgeColors = {
    page_view: '#6c3ce0', signup: '#10b981', login: '#3b82f6',
    course_start: '#f59e0b', lesson_start: '#ec4899',
    narration_play: '#8b5cf6'
  };
  el.innerHTML = events.map(ev => {
    const color = badgeColors[ev.event] || '#666';
    const time = ev.timestamp ? new Date(ev.timestamp).toLocaleString() : '';
    const user = ev.userId === 'anonymous' ? 'anonymous' : ev.userId;
    return `<div class="analytics-event-item">
      <span class="analytics-event-badge" style="background:${color}">${ev.event.replace(/_/g, ' ')}</span>
      <span class="analytics-event-user" title="${user}">${user.length > 20 ? user.slice(0, 18) + '…' : user}</span>
      <span class="analytics-event-time">${time}</span>
    </div>`;
  }).join('');
};

// --------------- SIDEBAR ---------------
const renderSidebar = (week) => {
  const panel = byId('sidebar-panel');
  let html = `<div class="sidebar-title">${week.title}</div>`;
  week.modules.forEach((mod, mi) => {
    html += `
      <div class="module-header" data-module-idx="${mi}">
        <i class="fas fa-caret-down caret"></i>
        <span>${mod.title}</span>
      </div>
      <div class="module-lessons" data-module-idx="${mi}">`;
    mod.lessons.forEach(lesson => {
      const prog = state.progress[lesson.id];
      const isCurrent = lesson.id === state.currentLessonId;
      const isCompleted = prog?.completed;
      const classes = ['lesson-item'];
      if (isCurrent) classes.push('current');
      if (isCompleted) classes.push('completed');
      html += `
        <div class="${classes.join(' ')}" data-lesson-id="${lesson.id}">
          <i class="fas fa-file-alt lesson-icon"></i>
          <span class="lesson-name">${lesson.title}</span>
          <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'} lesson-check"></i>
        </div>`;
    });
    html += `</div>`;
  });
  panel.innerHTML = html;
};

// --------------- LESSON ---------------
const renderLesson = (lessonId) => {
  const week = findWeek(state.currentWeekId);
  if (!week) return;
  const lesson = findLessonInWeek(week, lessonId);
  if (!lesson) return;

  state.currentLessonId = lessonId;
  state.currentSlide = 0;
  state.currentTab = 'overview';
  trackEvent('lesson_start', { lessonId });

  // Update sidebar highlight
  renderSidebar(week);

  // Title
  byId('lesson-main-title').textContent = lesson.title;

  // Slides
  if (lesson.slides && lesson.slides.length > 0) {
    renderSlide(0, lesson.slides);
  } else {
    byId('slide-content').innerHTML = `<div class="slide-title">No slides available</div>`;
    byId('slide-counter').textContent = '0 / 0';
    byId('slide-dots').innerHTML = '';
  }

  // Tabs — activate overview
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'overview'));
  renderTabContent('overview', lesson);

  // AI Playground
  renderPlayground(lesson);
};

// --------------- SLIDES ---------------
const renderSlide = (index, slides) => {
  if (!slides || slides.length === 0) return;
  stopNarration();
  const slide = slides[index];
  state.currentSlide = index;

  const content = byId('slide-content');
  content.classList.remove('fade-in');
  content.classList.add('fade-out');

  setTimeout(() => {
    let html = '';
    if (slide.title) html += `<div class="slide-title">${slide.title}</div>`;
    if (slide.content) html += `<div class="slide-body">${slide.content}</div>`;
    if (slide.visual) html += `<div class="slide-visual">${slide.visual}</div>`;
    content.innerHTML = html;
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
  }, 200);

  // Counter
  byId('slide-counter').textContent = `${index + 1} / ${slides.length}`;

  // Dots
  byId('slide-dots').innerHTML = slides.map((_, i) =>
    `<button class="slide-dot${i === index ? ' active' : ''}" data-slide="${i}"></button>`
  ).join('');

  // Buttons
  byId('slide-prev').disabled = index === 0;
  byId('slide-next').disabled = index === slides.length - 1;
};

const getCurrentSlides = () => {
  const week = findWeek(state.currentWeekId);
  if (!week) return [];
  const lesson = findLessonInWeek(week, state.currentLessonId);
  return lesson?.slides || [];
};

// ===============================================
//  NARRATION (Pre-generated Azure TTS MP3 Audio)
// ===============================================
const AUDIO_BASE = 'https://lmsaicoursestore.blob.core.windows.net/audio';
const narration = {
  speaking: false,
  paused: false,
  audio: null,
  autoAdvance: true
};

const getSlideNarrationText = (slide) => {
  const tmp = document.createElement('div');
  let text = '';
  if (slide.title) text += slide.title + '. ';
  if (slide.content) {
    tmp.innerHTML = slide.content;
    text += tmp.textContent + ' ';
  }
  return text.trim();
};

const stopNarration = () => {
  if (narration.audio) {
    narration.audio.pause();
    narration.audio.currentTime = 0;
    narration.audio = null;
  }
  window.speechSynthesis.cancel(); // stop any browser TTS fallback
  narration.speaking = false;
  narration.paused = false;
  narration.autoAdvance = true;
  byId('narrate-btn').style.display = '';
  byId('narrate-btn').innerHTML = '<i class="fas fa-play"></i>';
  byId('narrate-stop-btn').style.display = 'none';
  byId('narrate-progress').style.display = 'none';
};

const playAudio = (url) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    narration.audio = audio;
    narration.speaking = true;
    narration.paused = false;

    byId('narrate-btn').innerHTML = '<i class="fas fa-pause"></i>';
    byId('narrate-stop-btn').style.display = '';
    byId('narrate-progress').style.display = '';

    const fill = byId('narrate-bar-fill');

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        fill.style.transition = 'none';
        fill.style.width = pct + '%';
      }
    });

    audio.addEventListener('ended', () => {
      resolve('ended');
    });

    audio.addEventListener('error', () => {
      reject(new Error('Audio load failed'));
    });

    audio.play().catch(reject);
  });
};

// Fallback: browser TTS (for slides missing pre-generated audio)
const speakTextFallback = (text) => {
  return new Promise((resolve) => {
    const lang = byId('narrate-lang').value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.92;
    narration.speaking = true;
    narration.paused = false;

    byId('narrate-btn').innerHTML = '<i class="fas fa-pause"></i>';
    byId('narrate-stop-btn').style.display = '';
    byId('narrate-progress').style.display = '';

    const words = text.split(/\s+/).length;
    const durationMs = (words / 2.5) * 1000;
    const fill = byId('narrate-bar-fill');
    fill.style.transition = 'none';
    fill.style.width = '0%';
    requestAnimationFrame(() => {
      fill.style.transition = `width ${durationMs}ms linear`;
      fill.style.width = '100%';
    });

    utterance.onend = () => { if (!narration.paused) resolve('ended'); };
    utterance.onerror = () => { resolve('error'); };
    window.speechSynthesis.speak(utterance);
  });
};

const startNarration = async () => {
  stopNarration();

  const slides = getCurrentSlides();
  const slide = slides[state.currentSlide];
  if (!slide) return;

  const text = getSlideNarrationText(slide);
  if (!text) { showToast('No content to narrate', 'error'); return; }

  const lang = byId('narrate-lang').value;
  const key = `${state.currentLessonId}-${state.currentSlide}`;
  const suffix = lang === 'hi' ? 'hi' : 'en';
  const audioUrl = `${AUDIO_BASE}/${key}-${suffix}.mp3`;
  trackEvent('narration_play', { lessonId: state.currentLessonId, language: suffix });

  narration.autoAdvance = true;

  try {
    await playAudio(audioUrl);
  } catch {
    // Fallback to browser TTS
    if (lang === 'hi') {
      byId('narrate-btn').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      const token = localStorage.getItem('lms_token') || '';
      try {
        const res = await fetch('/api/hinglish', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
          body: JSON.stringify({ lessonId: state.currentLessonId, slideIndex: state.currentSlide, text })
        });
        if (res.ok) {
          const data = await res.json();
          await speakTextFallback(data.translation || text);
        } else {
          await speakTextFallback(text);
        }
      } catch {
        await speakTextFallback(text);
      }
    } else {
      await speakTextFallback(text);
    }
  }

  // Auto-advance
  stopNarration();
  if (narration.autoAdvance) {
    const nextIdx = state.currentSlide + 1;
    if (nextIdx < slides.length) {
      renderSlide(nextIdx, slides);
      setTimeout(startNarration, 400);
    }
  }
};

const toggleNarration = () => {
  if (narration.paused) {
    // Resume
    narration.paused = false;
    if (narration.audio) {
      narration.audio.play();
      narration.speaking = true;
      byId('narrate-btn').innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      startNarration();
    }
  } else if (narration.speaking) {
    // Pause
    narration.paused = true;
    narration.autoAdvance = false;
    narration.speaking = false;
    if (narration.audio) {
      narration.audio.pause();
    } else {
      window.speechSynthesis.cancel();
    }
    byId('narrate-btn').innerHTML = '<i class="fas fa-play"></i>';
    const fill = byId('narrate-bar-fill');
    fill.style.transition = 'none';
  } else {
    startNarration();
  }
};

// --------------- TABS ---------------
const renderTabContent = (tab, lesson) => {
  const el = byId('tab-content');
  state.currentTab = tab;

  if (tab === 'overview') {
    const items = (lesson.objectives || []).map(obj =>
      `<li><i class="fas fa-check-circle"></i> ${obj}</li>`
    ).join('');
    el.innerHTML = items ? `<ul class="objectives-list">${items}</ul>` : '<p style="color:#999">No objectives listed.</p>';
  } else if (tab === 'notes') {
    const notes = lesson.notes || 'No notes available.';
    const paragraphs = notes.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');
    el.innerHTML = `<div class="notes-content">${paragraphs}</div>`;
  } else if (tab === 'resources') {
    const list = (lesson.resources || []).map(r => {
      const icon = RESOURCE_ICONS[r.type] || RESOURCE_ICONS.default;
      return `
        <a class="resource-card" href="${r.url || '#'}" target="_blank" rel="noopener">
          <span class="resource-icon">${icon}</span>
          <div>
            <div class="resource-title">${r.title}</div>
            <div class="resource-type">${r.type || 'link'}</div>
          </div>
        </a>`;
    }).join('');
    el.innerHTML = list ? `<div class="resources-list">${list}</div>` : '<p style="color:#999">No resources available.</p>';
  }
};

// --------------- AI PLAYGROUND ---------------
const renderPlayground = (lesson) => {
  const ex = lesson.exercise || {};
  byId('exercise-task').textContent = ex.task || 'No exercise for this lesson.';
  byId('prompt-input').value = ex.starterPrompt || '';
  byId('hint-text').textContent = ex.hint || '';
  byId('exercise-hint').style.display = 'none';
  byId('show-hint-btn').style.display = ex.hint ? 'inline-block' : 'none';
  byId('ai-output').innerHTML = `<span class="placeholder-text">Your AI response will appear here...</span>`;

  // Restore saved data
  const prog = getLessonProgress(lesson.id);
  if (prog.promptText) byId('prompt-input').value = prog.promptText;
  if (prog.outputText) byId('ai-output').innerHTML = prog.outputText;

  // Reset submit button
  const submitBtn = byId('submit-btn');
  submitBtn.classList.toggle('submitted', prog.completed);
  submitBtn.innerHTML = prog.completed
    ? '<i class="fas fa-check"></i> Submitted ✅'
    : '<i class="fas fa-check"></i> Submit Task';
};

// --------------- MOCK AI RESPONSE GENERATOR ---------------
const generateMockResponse = (task, userPrompt) => {
  const combined = `${task} ${userPrompt}`.toLowerCase();

  if (combined.includes('marketing') || combined.includes('campaign') || combined.includes('brand')) {
    return `
      <h4>📊 Marketing Strategy Plan</h4>
      <p>Based on your prompt, here's a comprehensive marketing approach:</p>
      <ol>
        <li><strong>Target Audience Analysis</strong> — Define core demographics, psychographics, and behavioral segments to focus your messaging.</li>
        <li><strong>Channel Strategy</strong> — Leverage a mix of social media (Instagram, LinkedIn), email marketing, and content marketing for maximum reach.</li>
        <li><strong>Content Calendar</strong> — Create a 30-day content plan with daily themes, weekly highlights, and monthly campaigns.</li>
        <li><strong>KPI Framework</strong> — Track engagement rate, conversion rate, CAC, and ROAS to measure effectiveness.</li>
        <li><strong>A/B Testing Plan</strong> — Test headlines, CTAs, and creative variations across platforms to optimize performance.</li>
      </ol>
      <p>This strategy balances brand awareness with direct response tactics for measurable results.</p>`;
  }

  if (combined.includes('email') || combined.includes('newsletter') || combined.includes('outreach')) {
    return `
      <h4>✉️ Email Strategy</h4>
      <p>Based on your prompt, here's a structured email approach:</p>
      <ul>
        <li><strong>Subject Line:</strong> Use curiosity-driven or benefit-focused subject lines (keep under 50 chars)</li>
        <li><strong>Opening Hook:</strong> Start with a relevant pain point or compelling statistic</li>
        <li><strong>Body Structure:</strong> Problem → Solution → Proof → CTA flow</li>
        <li><strong>Personalization:</strong> Use dynamic fields for name, company, and industry references</li>
        <li><strong>CTA:</strong> Single, clear call-to-action with a low-friction next step</li>
      </ul>
      <p>Remember to segment your audience and customize the tone accordingly for maximum engagement.</p>`;
  }

  if (combined.includes('code') || combined.includes('program') || combined.includes('function') || combined.includes('develop')) {
    return `
      <h4>💻 Code Solution</h4>
      <p>Based on your prompt, here's the recommended implementation:</p>
      <ol>
        <li><strong>Architecture:</strong> Use a modular pattern with clear separation of concerns</li>
        <li><strong>Input Validation:</strong> Always validate and sanitize user inputs before processing</li>
        <li><strong>Error Handling:</strong> Implement try-catch blocks with meaningful error messages</li>
        <li><strong>Testing:</strong> Write unit tests covering edge cases, null inputs, and expected outputs</li>
        <li><strong>Documentation:</strong> Add JSDoc comments for public functions and complex logic</li>
      </ol>
      <p>Following these patterns ensures maintainable, scalable code that's easy to debug and extend.</p>`;
  }

  if (combined.includes('research') || combined.includes('analysis') || combined.includes('data') || combined.includes('report')) {
    return `
      <h4>🔍 Research Analysis</h4>
      <p>Based on your prompt, here's a structured research framework:</p>
      <ol>
        <li><strong>Define Objectives:</strong> Clearly articulate what questions you need answered</li>
        <li><strong>Methodology:</strong> Use a mixed-methods approach combining quantitative data and qualitative insights</li>
        <li><strong>Data Collection:</strong> Gather data from primary (surveys, interviews) and secondary (reports, databases) sources</li>
        <li><strong>Analysis Framework:</strong> Apply SWOT, Porter's Five Forces, or statistical analysis as appropriate</li>
        <li><strong>Key Findings:</strong> Synthesize data into actionable insights with supporting evidence</li>
      </ol>
      <p>Present findings with clear visualizations and executive summaries for stakeholder alignment.</p>`;
  }

  if (combined.includes('plan') || combined.includes('strategy') || combined.includes('project')) {
    return `
      <h4>📋 Strategic Plan</h4>
      <p>Based on your prompt, here's a comprehensive action plan:</p>
      <ol>
        <li><strong>Phase 1 — Discovery (Week 1-2):</strong> Audit current state, gather stakeholder input, define success metrics</li>
        <li><strong>Phase 2 — Planning (Week 3-4):</strong> Build roadmap, assign ownership, set milestones</li>
        <li><strong>Phase 3 — Execution (Week 5-8):</strong> Implement key initiatives, run weekly check-ins</li>
        <li><strong>Phase 4 — Review (Week 9-10):</strong> Measure results against KPIs, document learnings</li>
      </ol>
      <p>Each phase should have clear deliverables and accountability to ensure consistent progress.</p>`;
  }

  if (combined.includes('summary') || combined.includes('summarize') || combined.includes('summarise')) {
    return `
      <h4>📝 Summary</h4>
      <p>Based on your prompt, here's a concise summary:</p>
      <ul>
        <li><strong>Key Point 1:</strong> The core concept revolves around understanding the fundamental principles and their practical applications</li>
        <li><strong>Key Point 2:</strong> Implementation requires a structured approach with clear milestones and measurable outcomes</li>
        <li><strong>Key Point 3:</strong> Success depends on consistent execution, regular feedback loops, and iterative improvement</li>
      </ul>
      <p>The main takeaway is to focus on high-impact actions that align with your stated objectives while maintaining flexibility to adapt.</p>`;
  }

  // Default response
  return `
    <h4>🤖 AI Response</h4>
    <p>Based on your prompt, here's a structured response:</p>
    <ol>
      <li><strong>Understanding:</strong> Your request involves creating a well-structured approach to the given task with clear deliverables.</li>
      <li><strong>Approach:</strong> Break the task into manageable components, prioritize by impact, and execute systematically.</li>
      <li><strong>Key Considerations:</strong>
        <ul>
          <li>Define clear objectives and success criteria upfront</li>
          <li>Identify potential challenges and mitigation strategies</li>
          <li>Set realistic timelines with buffer for iterations</li>
        </ul>
      </li>
      <li><strong>Recommendations:</strong> Start with a minimum viable approach, gather feedback early, and refine based on results.</li>
    </ol>
    <p>This framework provides a solid foundation — adjust the specifics based on your unique context and constraints.</p>`;
};

// ===============================================
//  INTEREST FORM (Landing Page)
// ===============================================
const showInterestForm = () => {
  const container = byId('interest-form-container');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
  if (container.style.display === 'block') {
    byId('interest-name').focus();
  }
};

const submitInterest = async (e) => {
  e.preventDefault();
  const name = byId('interest-name').value.trim();
  const email = byId('interest-email').value.trim();
  const phone = byId('interest-phone').value.trim();

  if (!name && !email && !phone) {
    showToast('Please fill in at least one field.', 'error');
    return;
  }

  const btn = byId('interest-submit-btn');
  const text = byId('interest-submit-text');
  const spinner = byId('interest-spinner');
  btn.disabled = true;
  text.style.display = 'none';
  spinner.style.display = 'inline-block';

  try {
    const res = await fetch('/api/submitlead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone })
    });
    if (res.ok) {
      showToast('Thank you for your interest! We\'ll be in touch soon. 🎉', 'success');
      byId('interest-form').reset();
      byId('interest-form-container').style.display = 'none';
    } else {
      showToast('Something went wrong. Please try again.', 'error');
    }
  } catch {
    showToast('Network error. Please try again.', 'error');
  } finally {
    btn.disabled = false;
    text.style.display = '';
    spinner.style.display = 'none';
  }
};

// ===============================================
//  EVENT LISTENERS
// ===============================================
const setupEventListeners = () => {

  // --- Dashboard: Enrolled course card click → course detail ---
  byId('enrolled-courses-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.course-card');
    if (card) navigateToCourseDetail();
  });

  // --- Dashboard: Explore (locked) course cards are handled by onclick in the HTML ---

  // --- Course Detail: Week card click → lesson view ---
  byId('weeks-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.course-card');
    if (card) navigateToCourse(card.dataset.weekId);
  });

  // --- Back to courses from course detail ---
  byId('back-to-courses').addEventListener('click', navigateToDashboard);

  // --- Back to Dashboard from lesson view ---
  byId('back-to-dashboard').addEventListener('click', () => {
    // Go back to course detail, not all the way to dashboard
    navigateToCourseDetail();
  });

  // --- Sidebar: Module toggle + Lesson click ---
  byId('sidebar-panel').addEventListener('click', (e) => {
    // Module header toggle
    const modHeader = e.target.closest('.module-header');
    if (modHeader) {
      modHeader.classList.toggle('collapsed');
      const idx = modHeader.dataset.moduleIdx;
      const lessons = modHeader.nextElementSibling;
      if (lessons) lessons.classList.toggle('collapsed');
      return;
    }

    // Lesson click
    const lessonItem = e.target.closest('.lesson-item');
    if (lessonItem) {
      renderLesson(lessonItem.dataset.lessonId);
    }
  });

  // --- Slide Navigation ---
  byId('slide-prev').addEventListener('click', () => {
    const slides = getCurrentSlides();
    if (state.currentSlide > 0) renderSlide(state.currentSlide - 1, slides);
  });

  byId('slide-next').addEventListener('click', () => {
    const slides = getCurrentSlides();
    if (state.currentSlide < slides.length - 1) renderSlide(state.currentSlide + 1, slides);
  });

  byId('slide-dots').addEventListener('click', (e) => {
    const dot = e.target.closest('.slide-dot');
    if (dot) renderSlide(parseInt(dot.dataset.slide, 10), getCurrentSlides());
  });

  // --- Narration ---
  byId('narrate-btn').addEventListener('click', toggleNarration);
  byId('narrate-stop-btn').addEventListener('click', stopNarration);
  // Load voices (some browsers load async)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // --- Tabs ---
  $('.lesson-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    $$('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const week = findWeek(state.currentWeekId);
    const lesson = findLessonInWeek(week, state.currentLessonId);
    if (lesson) renderTabContent(tab.dataset.tab, lesson);
  });

  // --- Show Hint ---
  byId('show-hint-btn').addEventListener('click', () => {
    byId('exercise-hint').style.display = 'flex';
    byId('show-hint-btn').style.display = 'none';
  });

  // --- Run with AI ---
  byId('run-ai-btn').addEventListener('click', async () => {
    const prompt = byId('prompt-input').value.trim();
    if (!prompt) {
      showToast('Please enter a prompt first.', 'error');
      return;
    }
    const runBtn = byId('run-ai-btn');
    const output = byId('ai-output');
    runBtn.disabled = true;
    runBtn.classList.add('loading');
    runBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    output.innerHTML = '<span class="placeholder-text">🤖 Processing your prompt...</span>';

    const task = byId('exercise-task').textContent;
    
    // Try real API first, fall back to mock
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Auth-Token': localStorage.getItem('lms_token') || ''
        },
        body: JSON.stringify({ prompt, task })
      });
      
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      
      // Format the AI response with markdown-like rendering
      const formatted = data.response
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
      output.innerHTML = `<h4>🤖 AI Response</h4><p>${formatted}</p>`;
    } catch (err) {
      // Fallback to mock response
      const response = generateMockResponse(task, prompt);
      output.innerHTML = response;
    }
    
    runBtn.disabled = false;
    runBtn.classList.remove('loading');
    runBtn.innerHTML = '<i class="fas fa-play"></i> Run with AI';
  });

  // --- Save ---
  byId('save-btn').addEventListener('click', () => {
    if (!state.currentLessonId) return;
    const prog = getLessonProgress(state.currentLessonId);
    prog.promptText = byId('prompt-input').value;
    prog.outputText = byId('ai-output').innerHTML;
    prog.saved = true;
    saveProgress();
    showToast('Progress saved!', 'success');
  });

  // --- Submit Task ---
  byId('submit-btn').addEventListener('click', () => {
    if (!state.currentLessonId) return;
    const prog = getLessonProgress(state.currentLessonId);
    prog.promptText = byId('prompt-input').value;
    prog.outputText = byId('ai-output').innerHTML;
    prog.completed = true;
    prog.saved = true;
    saveProgress();

    // Update submit button
    const submitBtn = byId('submit-btn');
    submitBtn.classList.add('submitted');
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted ✅';

    // Update sidebar
    const week = findWeek(state.currentWeekId);
    if (week) renderSidebar(week);

    showToast('Task submitted! ✅', 'success');
  });

  // --- Keyboard Shortcuts ---
  document.addEventListener('keydown', (e) => {
    if (state.currentView !== 'course') return;

    // Don't intercept when typing in textarea
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

    const slides = getCurrentSlides();
    if (e.key === 'ArrowLeft' && state.currentSlide > 0) {
      e.preventDefault();
      renderSlide(state.currentSlide - 1, slides);
    } else if (e.key === 'ArrowRight' && state.currentSlide < slides.length - 1) {
      e.preventDefault();
      renderSlide(state.currentSlide + 1, slides);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      navigateToDashboard();
    }
  });
};

// ===============================================
//  COMMUNITY DISCUSSIONS
// ===============================================
let communityCurrentCourse = 'ai-beginner';

const navigateToCommunity = () => {
  state.currentView = 'community';
  hideAllViews();
  byId('community-view').style.display = 'block';
  loadDiscussions(communityCurrentCourse);
};

const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + ' min ago';
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + 'h ago';
  const days = Math.floor(hrs / 24);
  if (days < 30) return days + 'd ago';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const loadDiscussions = async (courseId) => {
  const container = byId('community-content');
  container.innerHTML = '<p style="text-align:center;padding:40px;color:#aaa;">Loading discussions...</p>';
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/discussions?courseId=' + encodeURIComponent(courseId), {
      headers: { 'X-Auth-Token': token }
    });
    if (!res.ok) throw new Error('Failed to load discussions');
    const threads = await res.json();
    renderThreadList(threads, courseId);
  } catch (err) {
    container.innerHTML = '<p style="text-align:center;padding:40px;color:#f87171;">Failed to load discussions. Please try again.</p>';
  }
};

const renderThreadList = (threads, courseId) => {
  const container = byId('community-content');
  let html = `
    <button class="community-new-btn" onclick="showNewDiscussionForm('${courseId}')">
      <i class="fas fa-plus"></i> New Discussion
    </button>`;

  if (threads.length === 0) {
    html += '<div class="community-empty"><i class="fas fa-comments" style="font-size:48px;opacity:0.3;margin-bottom:16px;display:block;"></i><p>No discussions yet. Start the conversation!</p></div>';
  } else {
    html += '<div class="thread-list">';
    threads.forEach(t => {
      html += `
        <div class="thread-card" onclick="viewThread('${t.threadId}', '${courseId}')">
          <div class="thread-icon">💬</div>
          <div class="thread-info">
            <h3 class="thread-title">${escapeHtml(t.title)}</h3>
            <p class="thread-meta">
              Posted by <span class="thread-author">${escapeHtml(t.authorName)}</span> • ${timeAgo(t.createdAt)} • <span class="thread-reply-count">${t.replyCount} ${t.replyCount === 1 ? 'reply' : 'replies'}</span>
            </p>
          </div>
          <div class="thread-activity">
            <span class="thread-badge">${t.replyCount}</span>
          </div>
        </div>`;
    });
    html += '</div>';
  }
  container.innerHTML = html;
};

const escapeHtml = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const showNewDiscussionForm = (courseId) => {
  const container = byId('community-content');
  container.innerHTML = `
    <div class="community-form-card">
      <h3><i class="fas fa-pen"></i> Start a New Discussion</h3>
      <div class="community-field">
        <label>Title</label>
        <input type="text" id="new-thread-title" class="community-input" placeholder="What's on your mind?" maxlength="200">
      </div>
      <div class="community-field">
        <label>Body</label>
        <textarea id="new-thread-body" class="community-textarea" placeholder="Share your thoughts, questions, or ideas..." rows="6"></textarea>
      </div>
      <div class="community-form-actions">
        <button class="community-cancel-btn" onclick="loadDiscussions('${courseId}')">Cancel</button>
        <button class="community-submit-btn" onclick="createDiscussion('${courseId}')">
          <i class="fas fa-paper-plane"></i> Post Discussion
        </button>
      </div>
    </div>`;
};

const createDiscussion = async (courseId) => {
  const title = byId('new-thread-title').value.trim();
  const body = byId('new-thread-body').value.trim();
  if (!title || !body) {
    showToast('Please fill in both title and body.', 'error');
    return;
  }
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/discussions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ courseId, title, body })
    });
    if (!res.ok) throw new Error('Failed to create discussion');
    showToast('Discussion posted!', 'success');
    loadDiscussions(courseId);
  } catch (err) {
    showToast('Failed to post discussion. Please try again.', 'error');
  }
};

const viewThread = async (threadId, courseId) => {
  const container = byId('community-content');
  container.innerHTML = '<p style="text-align:center;padding:40px;color:#aaa;">Loading thread...</p>';
  try {
    const token = localStorage.getItem('lms_token');
    const [threadsRes, repliesRes] = await Promise.all([
      fetch('/api/discussions?courseId=' + encodeURIComponent(courseId), { headers: { 'X-Auth-Token': token } }),
      fetch('/api/replies?threadId=' + encodeURIComponent(threadId), { headers: { 'X-Auth-Token': token } })
    ]);
    if (!threadsRes.ok || !repliesRes.ok) throw new Error('Failed to load thread');
    const threads = await threadsRes.json();
    const replies = await repliesRes.json();
    const thread = threads.find(t => t.threadId === threadId);
    if (!thread) throw new Error('Thread not found');
    renderThreadDetail(thread, replies, courseId);
  } catch (err) {
    container.innerHTML = '<p style="text-align:center;padding:40px;color:#f87171;">Failed to load thread.</p>';
  }
};

const renderThreadDetail = (thread, replies, courseId) => {
  const container = byId('community-content');
  let html = `
    <button class="community-back-btn" onclick="loadDiscussions('${courseId}')">
      <i class="fas fa-arrow-left"></i> Back to Discussions
    </button>
    <div class="thread-detail-card">
      <h2 class="thread-detail-title">${escapeHtml(thread.title)}</h2>
      <p class="thread-detail-meta">
        Posted by <span class="thread-author">${escapeHtml(thread.authorName)}</span> • ${formatDate(thread.createdAt)}
      </p>
      <div class="thread-detail-body">${escapeHtml(thread.body).replace(/\n/g, '<br>')}</div>
    </div>
    <div class="thread-replies-section">
      <h3 class="replies-heading">Replies (${replies.length})</h3>`;

  if (replies.length === 0) {
    html += '<p class="replies-empty">No replies yet. Be the first to respond!</p>';
  } else {
    replies.forEach(r => {
      html += `
        <div class="reply-card">
          <div class="reply-header">
            <span class="reply-author">${escapeHtml(r.authorName)}</span>
            <span class="reply-date">${timeAgo(r.createdAt)}</span>
          </div>
          <div class="reply-body">${escapeHtml(r.body).replace(/\n/g, '<br>')}</div>
        </div>`;
    });
  }

  html += `
      <div class="reply-form">
        <textarea id="reply-body" class="community-textarea" placeholder="Write your reply..." rows="3"></textarea>
        <button class="community-submit-btn" onclick="postReply('${thread.threadId}', '${courseId}')">
          <i class="fas fa-reply"></i> Post Reply
        </button>
      </div>
    </div>`;
  container.innerHTML = html;
};

const postReply = async (threadId, courseId) => {
  const body = byId('reply-body').value.trim();
  if (!body) {
    showToast('Please write a reply.', 'error');
    return;
  }
  try {
    const token = localStorage.getItem('lms_token');
    const res = await fetch('/api/replies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({ threadId, courseId, body })
    });
    if (!res.ok) throw new Error('Failed to post reply');
    showToast('Reply posted!', 'success');
    viewThread(threadId, courseId);
  } catch (err) {
    showToast('Failed to post reply. Please try again.', 'error');
  }
};

// ===============================================
//  INIT
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderDashboard();
  setupEventListeners();
  // Hide dashboard initially until auth check
  byId('dashboard-view').style.display = 'none';
  checkAuth();
  // Track page view
  trackEvent('page_view', { referrer: document.referrer || '' });
});
