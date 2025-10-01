/*
  Replace native <abbr title> tooltips with faster (0.2s) custom tooltips.
  - Copies title -> data-tooltip + aria-label
  - Removes title to prevent native long-delay tooltip
  - Adds tabindex for keyboard accessibility where appropriate
  - Works with MkDocs Material instant navigation via document$.subscribe
*/
(() => {
  function initAbbrTooltips() {
    const nodes = document.querySelectorAll('abbr[title]');
    nodes.forEach((el) => {
      if (el.dataset.tooltipInit === '1') return;
      const title = el.getAttribute('title');
      if (!title) return;

      // Move title to data-tooltip and aria-label, then remove native title
      el.setAttribute('data-tooltip', title);
      el.setAttribute('aria-label', title);
      el.removeAttribute('title');
      el.dataset.tooltipInit = '1';

      // Make focusable for keyboard users if not already focusable/clickable
      if (!el.closest('a,button,[tabindex]')) {
        el.setAttribute('tabindex', '0');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAbbrTooltips);
  } else {
    initAbbrTooltips();
  }

  // Support for MkDocs Material instant navigation
  const doc$ = window.document$;
  if (doc$ && typeof doc$.subscribe === 'function') {
    doc$.subscribe(initAbbrTooltips);
  }
})();

