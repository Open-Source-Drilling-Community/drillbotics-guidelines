// Adds a "Copy Markdown" button next to the "View source" action.
// It fetches the raw .md and copies it to the clipboard.
(function () {
  function mount() {
    try {
      // Find the existing "View source of this page" link
      const viewLink = document.querySelector('a.md-content__button[title^="View source"]');
      if (!viewLink) return;

      // Avoid duplicates
      if (document.querySelector('.db-copy-md-button')) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'md-content__button md-icon db-copy-md-button';
      btn.title = 'Copy Markdown of this page';
      btn.setAttribute('aria-label', 'Copy Markdown of this page');
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>';

      async function copyMarkdown() {
        const url = viewLink.getAttribute('href');
        if (!url) return;
        const prevTitle = btn.title;
        try {
          btn.disabled = true;
          btn.title = 'Copying…';
          const res = await fetch(url, { cache: 'no-store' });
          const text = await res.text();
          await navigator.clipboard.writeText(text);
          btn.title = 'Copied!';
        } catch (e) {
          console.error('Copy Markdown failed', e);
          btn.title = 'Copy failed';
        } finally {
          setTimeout(() => { btn.title = prevTitle; btn.disabled = false; }, 1200);
        }
      }

      btn.addEventListener('click', copyMarkdown);

      // Insert right after the view source link
      viewLink.parentNode.insertBefore(btn, viewLink.nextSibling);
    } catch (_) { /* no-op */ }
  }

  // Handle initial load and Material's instant navigation
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(mount);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();

