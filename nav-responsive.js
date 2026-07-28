document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar').forEach((navbar) => {
    const nav = navbar.querySelector('nav');
    if (!nav || navbar.querySelector('.menu-toggle')) return;
    const button = document.createElement('button');
    button.className = 'menu-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Abrir menú de navegación');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '☰';
    navbar.insertBefore(button, nav);
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? '×' : '☰';
    });
    navbar.querySelectorAll('.dropdown > a').forEach((link) => {
      link.addEventListener('click', (event) => {
        if (window.matchMedia('(max-width: 900px)').matches) {
          event.preventDefault();
          link.parentElement.classList.toggle('submenu-open');
        }
      });
    });
  });
});
