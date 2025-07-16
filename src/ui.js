export function initScrollSpy() {
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = navLinks.map(l => document.querySelector(l.getAttribute('href')));

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
        }
      }
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );

  sections.forEach(s => s && observer.observe(s));
}

// (translateY slower than scroll)
export function initParallax() {
  const heroImg = document.querySelector('.hero img');
  if (!heroImg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.2; // intensity of parallax effect
    heroImg.style.transform = `translateY(${y}px) scale(1.02)`;
  });
}

// fade in on scroll
export function initFadeIns() {
  const els = document.querySelectorAll('.section, .card');
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    },
    { threshold: 0.1 }
  );
  els.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700');
    obs.observe(el);
  });
}