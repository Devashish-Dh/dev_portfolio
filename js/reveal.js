(function () {
  var selectors = [
    '.hero-copy',
    '.hero-mark',
    '.profile-summary',
    '.focus-grid > div',
    '.entry-row',
    '.item',
    '.timeline-item',
    '.about-section',
    '.skills-panel'
  ];

  var groups = [];
  selectors.forEach(function (sel) {
    var nodes = document.querySelectorAll(sel);
    if (nodes.length) groups.push(Array.prototype.slice.call(nodes));
  });
  if (!groups.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var targets = [];
  groups.forEach(function (nodes) {
    nodes.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i, 5) * 60 + 'ms';
      targets.push(el);
    });
  });

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
