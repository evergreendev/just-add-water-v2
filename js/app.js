document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  const toggleMenu = () => {
    body.classList.toggle('menu-open');
    body.classList.toggle('menu-closed');
  };

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // If it's an internal link
      if (link.getAttribute('href').startsWith('#')) {
        body.classList.remove('menu-open');
        body.classList.add('menu-closed');
      }
    });
  });
});
