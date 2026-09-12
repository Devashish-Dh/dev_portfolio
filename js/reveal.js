(function () {
  var specs = [
    ['.section-kicker', 'reveal-left'],
    ['.section-title', 'reveal-left'],
    ['.page-heading', 'reveal'],
    ['.mini-row', 'reveal'],
    ['.profile-summary', 'reveal'],
    ['.focus-grid > div', 'reveal'],
    ['.entry-row', 'reveal'],
    ['.rail-item', 'reveal'],
    ['.timeline-item', 'reveal'],
    ['.about-section', 'reveal'],
    ['.skills-panel', 'reveal']
  ];

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var targets = [];
  specs.forEach(function (spec) {
    var nodes = document.querySelectorAll(spec[0]);
    nodes.forEach(function (el, i) {
      el.classList.add(spec[1]);
      el.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
      targets.push(el);
    });
  });
  if (!targets.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
