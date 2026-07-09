const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
const label = document.querySelector('[data-theme-label]');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

function updateThemeLabel() {
  const isDark = root.dataset.theme === 'dark';
  if (label) {
    label.textContent = isDark ? 'Светлая' : 'Тёмная';
  }
}

updateThemeLabel();

toggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
  updateThemeLabel();
});
