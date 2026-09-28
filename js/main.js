/* =========================================================
   TOMDRONETECHNIK — interactions partagées
   ========================================================= */

// Année dynamique
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
if (burger && menu) {
  const toggle = (open) => {
    const willOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    burger.setAttribute('aria-label', willOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  burger.addEventListener('click', () => toggle());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) { toggle(false); burger.focus(); }
  });
}

// Formulaire de contact : ouvre le client mail avec les champs pré-remplis (site statique)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
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
