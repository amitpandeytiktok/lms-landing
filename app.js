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
let authMode = 'login'; // 'login' or 'signup'

const showAuthModal = (mode) => {
  authMode = mode || 'login';
  const modal = byId('auth-modal');
  modal.style.display = 'flex';
  updateAuthModalUI();
  // Focus first visible input
  setTimeout(() => {
    if (authMode === 'signup') byId('auth-name').focus();
    else byId('auth-email').focus();
  }, 100);
};

const hideAuthModal = () => {
  byId('auth-modal').style.display = 'none';
  byId('auth-error').style.display = 'none';
  byId('auth-form').reset();
};

const toggleAuthMode = () => {
  authMode = authMode === 'login' ? 'signup' : 'login';
  updateAuthModalUI();
};

const updateAuthModalUI = () => {
  const isLogin = authMode === 'login';
  byId('auth-modal-title').textContent = isLogin ? 'Welcome Back' : 'Create Account';
  byId('auth-modal-subtitle').textContent = isLogin ? 'Sign in to continue your AI journey' : 'Join thousands learning AI today';
  byId('name-field').style.display = isLogin ? 'none' : 'block';
  byId('auth-submit-text').textContent = isLogin ? 'Sign In' : 'Create Account';
  byId('auth-switch-text').textContent = isLogin ? "Don't have an account?" : 'Already have an account?';
  byId('auth-switch-btn').textContent = isLogin ? 'Sign Up' : 'Sign In';
  byId('auth-error').style.display = 'none';
  if (!isLogin) byId('auth-name').setAttribute('required', '');
  else byId('auth-name').removeAttribute('required');
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
  
  const endpoint = authMode === 'login' ? '/api/login' : '/api/signup';
  const body = authMode === 'login' ? { email, password } : { name, email, password };
  
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
    showToast(`Welcome${authMode === 'signup' ? '' : ' back'}, ${data.user.name}! 🎉`, 'success');
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
  byId('buy-view').style.display = 'none';
  byId('admin-view').style.display = 'none';
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
//  DASHBOARD – SINGLE COURSE TILE
// ===============================================
const renderDashboard = () => {
  const grid = byId('courses-grid');
  const pct = getCourseProgress();
  const fillClass = pct === 100 ? 'green' : 'blue';
  grid.innerHTML = `
    <div class="course-card" data-course="ai-beginner">
      <div class="card-image" style="background:linear-gradient(135deg, #1a0533 0%, #2d1560 30%, #6c3ce0 65%, #a855f7 100%)">
        <span class="card-emoji">🤖</span>
        <span class="price-badge">₹500</span>
      </div>
      <div class="card-info">
        <div class="card-week-title">AI Beginner Course</div>
        <div class="card-course-name">Master AI fundamentals across ${COURSE_DATA.weeks.length} weeks</div>
        <div class="progress-wrapper">
          <div class="progress-label"><span>Progress</span><span>${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill ${fillClass}" style="width:${pct}%"></div></div>
        </div>
        <div class="card-meta">
          <span><i class="fas fa-book-open"></i> ${getCourseTotalLessons()} lessons</span>
          <span><i class="fas fa-tasks"></i> ${getCourseTotalTasks()} tasks</span>
          <span><i class="fas fa-calendar-week"></i> ${COURSE_DATA.weeks.length} weeks</span>
        </div>
        <button class="buy-btn" onclick="event.stopPropagation(); navigateToBuyPage()"><i class="fas fa-shopping-cart"></i> Buy Now</button>
      </div>
    </div>`;
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
  ['dashboard-view', 'course-detail-view', 'course-view', 'buy-view', 'admin-view'].forEach(id => {
    const el = byId(id);
    if (el) el.style.display = 'none';
  });
};

const navigateToCourseDetail = () => {
  // Check if user has access
  const access = (state.currentUser && state.currentUser.courseAccess) || '';
  if (!access.split(',').map(s => s.trim()).includes('ai-beginner')) {
    navigateToBuyPage();
    return;
  }
  state.currentView = 'course-detail';
  hideAllViews();
  byId('course-detail-view').style.display = 'block';
  renderCourseDetail();
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

const navigateToBuyPage = () => {
  state.currentView = 'buy';
  hideAllViews();
  byId('buy-view').style.display = 'block';
};

const navigateToAdmin = () => {
  state.currentView = 'admin';
  hideAllViews();
  byId('admin-view').style.display = 'block';
  renderAdminView();
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
        <td>${hasAccess ? '<span class="access-yes">✅ ai-beginner</span>' : '<span class="access-no">❌ No access</span>'}</td>
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
//  NARRATION (Web Speech API)
// ===============================================
const narration = {
  speaking: false,
  utterance: null,
  hinglishCache: {} // cache translations by slide index + lesson
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

const translateToHinglish = async (text) => {
  const cacheKey = `${state.currentLessonId}-${state.currentSlide}`;
  if (narration.hinglishCache[cacheKey]) return narration.hinglishCache[cacheKey];

  try {
    const token = localStorage.getItem('lms_token') || '';
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
      body: JSON.stringify({
        prompt: `Convert this educational text to Hinglish (Hindi written in Roman script mixed with English). Rules:
- Keep ALL technical/tech keywords in English (AI, prompt, machine learning, API, chatbot, LLM, data, code, etc.)
- Use simple Hindi (Roman script) for everything else so a 4th grader can follow
- Keep it conversational and fun, like a cool teacher explaining to kids
- Do NOT add any extra content, just convert what's given
- Output ONLY the converted text, nothing else

Text to convert:
${text}`
      })
    });
    if (!res.ok) throw new Error('Translation failed');
    const data = await res.json();
    const translated = data.response || text;
    narration.hinglishCache[cacheKey] = translated;
    return translated;
  } catch (err) {
    showToast('Hinglish translation failed, using English', 'error');
    return text;
  }
};

const stopNarration = () => {
  window.speechSynthesis.cancel();
  narration.speaking = false;
  narration.utterance = null;
  byId('narrate-btn').style.display = '';
  byId('narrate-btn').innerHTML = '<i class="fas fa-play"></i>';
  byId('narrate-stop-btn').style.display = 'none';
  byId('narrate-progress').style.display = 'none';
};

const startNarration = async () => {
  if (!('speechSynthesis' in window)) {
    showToast('Narration not supported in this browser', 'error');
    return;
  }

  stopNarration();

  const slides = getCurrentSlides();
  const slide = slides[state.currentSlide];
  if (!slide) return;

  let text = getSlideNarrationText(slide);
  if (!text) { showToast('No content to narrate', 'error'); return; }

  const lang = byId('narrate-lang').value;

  if (lang === 'hi') {
    // Show loading state
    byId('narrate-btn').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    byId('narrate-btn').disabled = true;
    text = await translateToHinglish(text);
    byId('narrate-btn').disabled = false;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  // Use hi-IN voice for Hinglish (handles Hindi words better) and en-IN for English
  utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.rate = 0.92;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const langPrefix = lang === 'hi' ? 'hi' : 'en';
  const preferred = voices.find(v => v.lang.startsWith(langPrefix) && v.name.toLowerCase().includes('google'))
    || voices.find(v => v.lang.startsWith(langPrefix))
    || voices[0];
  if (preferred) utterance.voice = preferred;

  narration.utterance = utterance;
  narration.speaking = true;

  byId('narrate-btn').innerHTML = '<i class="fas fa-pause"></i>';
  byId('narrate-stop-btn').style.display = '';
  byId('narrate-progress').style.display = '';

  const words = text.split(/\s+/).length;
  const durationMs = (words / 2.5) * 1000;
  const fill = byId('narrate-bar-fill');
  fill.style.transition = `width ${durationMs}ms linear`;
  fill.style.width = '0%';
  requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = '100%'; }));

  utterance.onend = () => {
    stopNarration();
    const nextIdx = state.currentSlide + 1;
    if (nextIdx < slides.length) {
      renderSlide(nextIdx, slides);
      setTimeout(startNarration, 400);
    }
  };

  utterance.onerror = () => stopNarration();

  window.speechSynthesis.speak(utterance);
};

const toggleNarration = () => {
  if (narration.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      byId('narrate-btn').innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      window.speechSynthesis.pause();
      byId('narrate-btn').innerHTML = '<i class="fas fa-play"></i>';
    }
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
//  EVENT LISTENERS
// ===============================================
const setupEventListeners = () => {

  // --- Dashboard: Course card click → course detail ---
  byId('courses-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.course-card');
    if (card && !e.target.closest('.buy-btn')) navigateToCourseDetail();
  });

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
//  INIT
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderDashboard();
  setupEventListeners();
  // Hide dashboard initially until auth check
  byId('dashboard-view').style.display = 'none';
  checkAuth();
});
