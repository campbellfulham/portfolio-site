// Tasteful One‑Pager — script.js
// Light interactivity: mobile nav, smooth scroll, contact stub, year.

(function () {
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Update copyright year
  const yearEl = qs('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const navBtn = qs('.nav-toggle');
  const nav = qs('#site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile)
    qsa('a', nav).forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      navBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll for in-page anchors (respect reduced motion)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  qsa('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = id ? qs(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

  // Contact form stub (fake submit)
  const form = qs('.contact-form');
  if (form) {
    const note = qs('.form-note', form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        if (note) note.textContent = 'Please complete all fields.';
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (note) note.textContent = 'Please enter a valid email.';
        return;
      }

      if (note) note.textContent = 'Thanks — your message is on its way!';
      form.reset();
      setTimeout(() => { if (note) note.textContent = ''; }, 4000);
    });
  }
})();

