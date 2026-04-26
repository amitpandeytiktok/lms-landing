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
  activeFilter: 'all',
  progress: {}
};

// --------------- AUTH ---------------
const checkAuth = async () => {
  try {
    const res = await fetch('/.auth/me');
    const data = await res.json();
    const user = data.clientPrincipal;
    if (user) {
      const section = byId('auth-section');
      const initials = (user.userDetails || 'U').substring(0, 2).toUpperCase();
      section.innerHTML = `
        <div class="user-info">
          <div class="user-avatar">${initials}</div>
          <span class="user-name">${user.userDetails || 'User'}</span>
        </div>
        <a href="/.auth/logout?post_logout_redirect_uri=/" class="logout-btn">Sign Out</a>
      `;
      return user;
    }
  } catch (e) {
    // Not authenticated or running locally — that's fine
  }
  return null;
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
const renderDashboard = () => {
  const grid = byId('courses-grid');
  const weeks = getFilteredWeeks();
  if (weeks.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px;">No courses match this filter.</p>`;
    return;
  }
  grid.innerHTML = weeks.map(week => {
    const pct = getWeekProgress(week);
    const fillClass = pct === 100 ? 'green' : 'blue';
    const badgeClass = week.badge || 'live';
    return `
      <div class="course-card" data-week-id="${week.id}">
        <div class="card-image" style="background:${week.gradient || 'linear-gradient(135deg,#6c3ce0,#a855f7)'}">
          <span class="card-badge ${badgeClass}">${badgeClass}</span>
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

const getFilteredWeeks = () => {
  const f = state.activeFilter;
  if (f === 'all') return COURSE_DATA.weeks;
  if (f === 'completed') return COURSE_DATA.weeks.filter(w => getWeekProgress(w) === 100);
  return COURSE_DATA.weeks.filter(w => (w.badge || '').toLowerCase() === f);
};

// ===============================================
//  COURSE VIEW RENDERING
// ===============================================
const navigateToCourse = (weekId) => {
  const week = findWeek(weekId);
  if (!week) return;
  state.currentView = 'course';
  state.currentWeekId = weekId;
  byId('dashboard-view').style.display = 'none';
  byId('course-view').style.display = 'block';
  renderSidebar(week);
  const firstLesson = getFirstIncompleteLesson(week);
  if (firstLesson) renderLesson(firstLesson.id);
};

const navigateToDashboard = () => {
  state.currentView = 'dashboard';
  state.currentWeekId = null;
  state.currentLessonId = null;
  byId('course-view').style.display = 'none';
  byId('dashboard-view').style.display = 'block';
  renderDashboard();
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

  // --- Dashboard: Course card click ---
  byId('courses-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.course-card');
    if (card) navigateToCourse(card.dataset.weekId);
  });

  // --- Dashboard: Filter buttons ---
  $('.courses-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeFilter = btn.dataset.filter;
    renderDashboard();
  });

  // --- Dashboard: View toggle ---
  $('.view-toggle').addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;
    $$('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const grid = byId('courses-grid');
    if (btn.dataset.view === 'list') {
      grid.style.gridTemplateColumns = '1fr';
    } else {
      grid.style.gridTemplateColumns = '';
    }
  });

  // --- Back to Dashboard ---
  byId('back-to-dashboard').addEventListener('click', navigateToDashboard);

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
        headers: { 'Content-Type': 'application/json' },
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
  checkAuth();
});
