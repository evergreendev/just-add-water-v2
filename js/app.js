document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  const toggleMenu = () => {
    console.log('toggle menu');
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

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('h3');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('is-open');
      });
    }
  });

  const subject = encodeURIComponent('Don’t Overlook Western SD’s Water Needs');
  const emailBody = encodeURIComponent('I’m writing as a concerned citizen to express my support for strengthening water security in western South Dakota.\n\nReliable access to water is essential for our communities, agriculture, and long-term economic stability. As growth continues and conditions remain unpredictable, it’s important that we take proactive steps to ensure a sustainable water supply for future generations.\n\nI encourage you to stay informed on this issue and to support efforts such as the Western Dakota Regional Water System (wdrws.org) in any way you can. Investments in water infrastructure today will help protect and preserve our region for years to come.');
  const mailtoParams = `?subject=${subject}&body=${emailBody}`;

  const legislatorLinks = document.querySelectorAll('a[href^="mailto:"]');
  legislatorLinks.forEach(link => {
    link.href += mailtoParams;
  });
});
