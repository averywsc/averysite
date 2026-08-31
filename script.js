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
};

const createSettingsUI = () => {
  const button = document.getElementById('site-settings-button');
  const panel = document.getElementById('site-settings-panel');

  if (!button && !panel) {
    const newButton = document.createElement('button');
    newButton.id = 'site-settings-button';
    newButton.type = 'button';
    newButton.setAttribute('aria-label', 'Open settings');
    newButton.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5v2.3M12 18.2v2.3M4.93 4.93l1.63 1.63M17.44 17.44l1.63 1.63M3.5 12h2.3M18.2 12h2.3M4.93 19.07l1.63-1.63M17.44 6.56l1.63-1.63M12 7.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Z"/>
      </svg>
    `;
    document.body.appendChild(newButton);
  }

  const attachedButton = document.getElementById('site-settings-button');
  const attachedPanel = document.getElementById('site-settings-panel') || (() => {
    const newPanel = document.createElement('div');
    newPanel.id = 'site-settings-panel';
    newPanel.setAttribute('aria-live', 'polite');
    newPanel.innerHTML = `
      <div class="settings-group">
        <div class="settings-label">Theme</div>
        <div class="settings-options">
          <button type="button" class="settings-option" data-theme-option="dark" aria-pressed="true">Dark</button>
          <button type="button" class="settings-option" data-theme-option="light" aria-pressed="false">Light</button>
        </div>
      </div>
    `;
    document.body.appendChild(newPanel);
    return newPanel;
  })();

  attachedButton.addEventListener('click', (event) => {
    event.stopPropagation();
    attachedPanel.classList.toggle('open');
  });

  attachedPanel.querySelectorAll('[data-theme-option]').forEach(option => {
    option.addEventListener('click', () => {
      applyTheme(option.dataset.themeOption === 'light');
      attachedPanel.classList.remove('open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!attachedPanel.contains(event.target) && !attachedButton.contains(event.target)) {
      attachedPanel.classList.remove('open');
    }
  });
};

let settingsInitialized = false;

const initializeSettings = () => {
  if (settingsInitialized) return;
  settingsInitialized = true;
  createSettingsUI();
  loadSettings();
};

document.addEventListener('DOMContentLoaded', initializeSettings);
if (document.readyState !== 'loading') {
  initializeSettings();
}
