document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobilePanel = document.querySelector('.mobile-panel');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileLinks = document.querySelectorAll('.mobile-panel a');

  // Initial state: transparent if at top
  function updateNavbarOnScroll(){
    if(window.scrollY > 40){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  updateNavbarOnScroll();
  window.addEventListener('scroll', updateNavbarOnScroll);

  // Hamburger toggle
  if(hamburger && mobilePanel){
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobilePanel.classList.toggle('open');
    });
  }

  // Close mobile panel on link click
  mobileLinks.forEach(a => a.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    if(hamburger) hamburger.classList.remove('active');
  }));

  // Mark active link (desktop + mobile)
  const current = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if(href === current) a.classList.add('active');
  });
  mobileLinks.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if(href === current) a.classList.add('active');
  });
});
