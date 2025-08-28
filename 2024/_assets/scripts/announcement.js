// Simple site-wide announcement banner for Material for MkDocs
// Edit the message/date/link below. Dismissal persisted in localStorage.
(function () {
  const CONFIG = {
    key: 'db_announcement_v1',
    message: 'Registration closes on 2025-10-17 see Timeline »',
    url: '/competition/timeline/',
    theme: 'info' // info | warning | success (visual only)
  };

  try {
    if (window.localStorage.getItem(CONFIG.key) === 'dismissed') return;
  } catch (_) {}

  function buildBanner() {
    const banner = document.createElement('div');
    banner.className = 'db-announcement ' + CONFIG.theme;
    const link = document.createElement('a');
    try {
      const base = (document.querySelector('.md-header__button.md-logo') || document.querySelector('.md-header__title a'))?.href || '/';
      link.href = new URL(CONFIG.url, base).href;
    } catch (_) { link.href = CONFIG.url; }
    link.textContent = CONFIG.message;
    link.className = 'db-announcement__link';
    const close = document.createElement('button');
    close.className = 'db-announcement__close';
    close.setAttribute('aria-label', 'Dismiss announcement');
    close.innerHTML = '×';
    close.onclick = function () {
      try { window.localStorage.setItem(CONFIG.key, 'dismissed'); } catch (_) {}
      banner.remove();
    };
    banner.appendChild(link);
    banner.appendChild(close);
    return banner;
  }

  function mount() {
    const header = document.querySelector('.md-header');
    if (!header) return;
    const banner = buildBanner();
    header.after(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
