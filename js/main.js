/* =========================================================
   TOMDRONETECHNIK — interactions partagées
   ========================================================= */

// Année dynamique
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// En-tête au défilement
const header = document.querySelector('header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
if (burger && menu) {
  const toggle = (open) => {
    const willOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
  };
  burger.addEventListener('click', () => toggle());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
}

// Apparition au défilement
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealables = document.querySelectorAll('.reveal');
if (reduced || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealables.forEach((el) => io.observe(el));
}

// Formulaire de contact : ouvre le client mail avec les champs pré-remplis (site statique)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const to = form.dataset.email || '';
    const nom = (form.nom?.value || '').trim();
    const email = (form.email?.value || '').trim();
    const message = (form.message?.value || '').trim();
    const sujet = `Demande de devis — ${nom || 'site TOMDRONETECHNIK'}`;
    const corps = `Nom : ${nom}\nE-mail : ${email}\n\n${message}`;
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
  });
}
