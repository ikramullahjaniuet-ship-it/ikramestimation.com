/* Ikram Estimation Services — site interactions */
(function () {
  // Mobile nav toggle
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Current year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Scroll reveal
  var io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Lightweight client-side form feedback (works before a backend is wired up)
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      // If no real "action" endpoint is set, prevent and show a friendly note.
      if (!form.getAttribute('action') || form.getAttribute('action') === '#') {
        ev.preventDefault();
        var note = form.querySelector('.form-result');
        if (!note) {
          note = document.createElement('p');
          note.className = 'form-result';
          note.style.cssText = 'margin-top:16px;font-family:var(--f-mono);font-size:13px;color:var(--accent-ink)';
          form.appendChild(note);
        }
        note.textContent = 'Form is in preview mode. Connect Formspree (see deploy guide) to start receiving messages.';
        form.reset();
      }
    });
  });
})();
