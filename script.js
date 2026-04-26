// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Lesson tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Week accordion toggle
document.querySelectorAll('.week-header').forEach(header => {
  header.addEventListener('click', () => {
    const group = header.parentElement;
    group.classList.toggle('open');
  });
});

// Module accordion toggle
document.querySelectorAll('.module-header').forEach(header => {
  header.addEventListener('click', () => {
    const group = header.parentElement;
    group.classList.toggle('collapsed');
    const icon = header.querySelector('i');
    if (group.classList.contains('collapsed')) {
      icon.className = 'fas fa-caret-right';
    } else {
      icon.className = 'fas fa-caret-down';
    }
  });
});

// Run with AI button
const runBtn = document.querySelector('.btn-run');
if (runBtn) {
  runBtn.addEventListener('click', () => {
    const input = document.querySelector('.playground-input');
    const output = document.querySelector('.playground-output');
    if (input.value.trim()) {
      output.innerHTML = '<span style="color: #888; font-style: italic;">Processing your prompt...</span>';
      setTimeout(() => {
        output.innerHTML = `<strong>AI Response:</strong><br><br>Based on your prompt, here's a marketing plan outline:<br><br>1. <strong>Target Audience Analysis</strong> - Identify key demographics<br>2. <strong>Value Proposition</strong> - Define unique selling points<br>3. <strong>Channel Strategy</strong> - Select optimal marketing channels<br>4. <strong>Content Calendar</strong> - Plan content distribution<br>5. <strong>KPI Metrics</strong> - Set measurable goals`;
      }, 1500);
    }
  });
}
