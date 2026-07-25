// Theme toggle with persistence; defaults to light (academic style), respects OS preference.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('.theme-toggle__icon');

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('theme', next);
  });

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '☀' : '☾';
  }
})();
