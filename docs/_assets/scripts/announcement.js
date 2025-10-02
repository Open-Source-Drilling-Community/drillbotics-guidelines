// Simple site-wide announcement banner for Material for MkDocs
// Edit the message/date/link below. Dismissal persisted in localStorage.
(function () {
  const CONFIG = {
    key: 'db_announcement_v2',
    message: 'Registration closes on 2025-11-30',
    linkLabel: 'See Timeline',
    url: 'drillbotics-guidelines/competition/timeline/',
    theme: 'info' // info | warning | success (visual only)
  };

  try {
    if (window.localStorage.getItem(CONFIG.key) === 'dismissed') return;
  } catch (_) {}

  function siteRoot() {
    const { hostname, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    const versionPattern = /^(latest|next|stable|dev|v\d+|\d{4}(?:\.\d+)?)$/i;

    if (!parts.length) return '/';

    if (versionPattern.test(parts[0])) {
      return `/${parts[0]}/`;
    }

    if (parts.length > 1 && versionPattern.test(parts[1])) {
      return `/${parts.slice(0, 2).join('/')}/`;
    }

    if (hostname.endsWith('.github.io') && parts.length) {
      return `/${parts[0]}/`;
    }

    return '/';
  }

  function resolveUrl(target) {
    if (!target) return '#';
    if (/^(?:[a-z]+:)?\/\//i.test(target)) return target;
    if (target.startsWith('/')) {
      return new URL(target, window.location.origin).href;
    }
    const root = siteRoot();
    return new URL(target, window.location.origin + root).href;
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.className = 'db-announcement ' + CONFIG.theme;

    const text = document.createElement('span');
    text.className = 'db-announcement__text';
    text.textContent = CONFIG.message;

    const sep = document.createElement('span');
    sep.className = 'db-announcement__sep';
    sep.textContent = ' — ';

    const link = document.createElement('a');
    try {
      link.href = resolveUrl(CONFIG.url);
    } catch (_) { link.href = CONFIG.url; }
    link.textContent = CONFIG.linkLabel || CONFIG.url;
    link.className = 'db-announcement__link';

    const close = document.createElement('button');
    close.className = 'db-announcement__close';
    close.setAttribute('aria-label', 'Dismiss announcement');
    close.innerHTML = 'x';
    close.onclick = function () {
      try { window.localStorage.setItem(CONFIG.key, 'dismissed'); } catch (_) {}
      banner.remove();
      window.dispatchEvent(new CustomEvent('db:announcement-dismissed'));
    };

    banner.appendChild(text);
    banner.appendChild(sep);
    banner.appendChild(link);
    banner.appendChild(close);
    return banner;
  }

  function mount() {
    const header = document.querySelector('.md-header');
    if (!header) return;
    const banner = buildBanner();
    header.after(banner);
    window.dispatchEvent(new CustomEvent('db:announcement-mounted'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
