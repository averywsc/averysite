document.documentElement.style.setProperty('--font-active', "'Dotmatri', sans-serif");
document.documentElement.style.setProperty('--font-body', "'Dotmatri', sans-serif");

const updateThemeButton = () => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const isLight = document.body.classList.contains('light-mode');
  button.textContent = isLight ? 'Dark mode' : 'Light mode';
  button.setAttribute('aria-pressed', String(isLight));
};

const applySavedTheme = () => {
  try {
    const stored = localStorage.getItem('averysite-theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const shouldUseLight = stored ? stored === 'light' : prefersLight;
    document.body.classList.toggle('light-mode', shouldUseLight);
  } catch (error) {
    document.body.classList.remove('light-mode');
  }
  updateThemeButton();
};

const toggleTheme = () => {
  const nextIsLight = !document.body.classList.contains('light-mode');
  document.body.classList.toggle('light-mode', nextIsLight);
  try {
    localStorage.setItem('averysite-theme', nextIsLight ? 'light' : 'dark');
  } catch (error) {
    // no-op if storage is unavailable
  }
  updateThemeButton();
};

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();

  const button = document.querySelector('.theme-toggle');
  if (button) {
    button.addEventListener('click', toggleTheme);
  }
});
