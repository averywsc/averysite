document.documentElement.style.setProperty('--font-active', "'Dotmatri', sans-serif");
document.documentElement.style.setProperty('--font-body', "'Dotmatri', sans-serif");

const applyTheme = (isLight) => {
  document.body.classList.toggle('light-mode', isLight);
  try {
    localStorage.setItem('averysite-theme', isLight ? 'light' : 'dark');
  } catch (error) {}
  const themeButtons = document.querySelectorAll('[data-theme-option]');
  themeButtons.forEach(button => {
    const active = button.dataset.themeOption === (isLight ? 'light' : 'dark');
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
};

const applyTextSize = (size) => {
  const normalized = ['small', 'normal', 'large'].includes(size) ? size : 'normal';
  document.body.dataset.textSize = normalized;
  try {
    localStorage.setItem('averysite-text-size', normalized);
  } catch (error) {}
  const buttons = document.querySelectorAll('[data-size-option]');
  buttons.forEach(button => {
    const active = button.dataset.sizeOption === normalized;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
};

const loadSettings = () => {
  let themeIsLight = false;
  try {
    const storedTheme = localStorage.getItem('averysite-theme');
    if (storedTheme) {
      themeIsLight = storedTheme === 'light';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      themeIsLight = true;
    }
  } catch (error) {}
  applyTheme(themeIsLight);

  let size = 'normal';
  try {
    const storedSize = localStorage.getItem('averysite-text-size');
    if (storedSize) size = storedSize;
  } catch (error) {}
  applyTextSize(size);
};

const createSettingsUI = () => {
  if (document.getElementById('site-settings-button')) return;

  const button = document.createElement('button');
  button.id = 'site-settings-button';
  button.type = 'button';
  button.setAttribute('aria-label', 'Open settings');
  button.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5v2.3M12 18.2v2.3M4.93 4.93l1.63 1.63M17.44 17.44l1.63 1.63M3.5 12h2.3M18.2 12h2.3M4.93 19.07l1.63-1.63M17.44 6.56l1.63-1.63M12 7.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Z"/>
    </svg>
  `;

  const panel = document.createElement('div');
  panel.id = 'site-settings-panel';
  panel.innerHTML = `
    <div class="settings-group">
      <div class="settings-label">Theme</div>
      <div class="settings-options">
        <button type="button" class="settings-option" data-theme-option="dark" aria-pressed="true">Dark</button>
        <button type="button" class="settings-option" data-theme-option="light" aria-pressed="false">Light</button>
      </div>
    </div>
    <div class="settings-group">
      <div class="settings-label">Text Size</div>
      <div class="settings-options">
        <button type="button" class="settings-option" data-size-option="small" aria-pressed="false">Small</button>
        <button type="button" class="settings-option" data-size-option="normal" aria-pressed="true">Normal</button>
        <button type="button" class="settings-option" data-size-option="large" aria-pressed="false">Large</button>
      </div>
    </div>
  `;

  document.body.appendChild(button);
  document.body.appendChild(panel);

  button.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  panel.querySelectorAll('[data-theme-option]').forEach(option => {
    option.addEventListener('click', () => applyTheme(option.dataset.themeOption === 'light'));
  });

  panel.querySelectorAll('[data-size-option]').forEach(option => {
    option.addEventListener('click', () => applyTextSize(option.dataset.sizeOption));
  });

  document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !button.contains(event.target)) {
      panel.classList.remove('open');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createSettingsUI();
  loadSettings();
});
