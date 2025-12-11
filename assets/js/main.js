document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const opened = mobileMenu.classList.toggle('open');
      mobileMenu.style.display = opened ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });

    // close when clicking a link
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.style.display = 'none';
      toggle.setAttribute('aria-expanded','false');
    }));
  }

  // mark active menu item
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if ((a.getAttribute('href') || '') === current) a.classList.add('active');
  });
});
