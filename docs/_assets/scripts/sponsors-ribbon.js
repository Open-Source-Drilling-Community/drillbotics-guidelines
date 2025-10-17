// Site-wide Sponsors Ribbon for Material for MkDocs
// - Injects a horizontally scrollable ribbon of sponsor logos below the header
// - Pulls data from a JSON file next to this script: ../data/sponsors.json
// - Adds a CTA button at the end linking to a donation/sponsorship page

(function () {
  'use strict';

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  const SCRIPT_URL = (function () {
    // Resolve this script URL even if bundled/minified
    const current = document.currentScript;
    if (current && current.src) return current.src;
    // Fallback: find by filename
    const scripts = Array.from(document.getElementsByTagName('script'));
    const match = scripts.find(s => (s.src || '').includes('sponsors-ribbon'));
    return match ? match.src : '';
  })();

  const DEFAULT_CONFIG = {
    dataUrl: SCRIPT_URL ? new URL('../data/sponsors.json', SCRIPT_URL).href : '_assets/data/sponsors.json',
    donationUrl: 'https://drillbotics.com/donate',
    // Used when data file is missing; you can delete these once real data is in place
    fallbackSponsors: [
      { name: 'Drilling Systems Advancement Technical Section (DSATS)', url: 'https://www.spe-dsats.org/', logo: '_assets/images/sponsors/DSATS_logo.png' },
      { name: 'Gibson Reports', url: 'https://www.gibsonreports.com/', logo: '_assets/images/sponsors/Gibson_reports_logo_black.png' }
    ]
  };

  // Normalize logo path relative to site base URL
  function normalizeLogoPath(path) {
    if (!path) return path;
    // If already absolute (http/https), return as-is
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    // Use new URL() to resolve relative paths correctly
    // This works with MkDocs' base URL structure (e.g., /drillbotics-guidelines/)
    // by resolving relative to the document's base URI
    try {
      const resolved = new URL(path, document.baseURI);
      return resolved.href;
    } catch (e) {
      // Fallback: return path as-is if URL construction fails
      console.warn('Failed to resolve logo path:', path, e);
      return path;
    }
  }

  function createRibbon(items, donationUrl) {
    const region = document.createElement('div');
    region.className = 'db-sponsors-ribbon';
    region.setAttribute('role', 'region');
    region.setAttribute('aria-label', 'Sponsors');

    const inner = document.createElement('div');
    inner.className = 'db-sponsors-ribbon__inner';

    const list = document.createElement('ul');
    list.className = 'db-sponsors-ribbon__list';
    list.setAttribute('role', 'list');

    (items || []).forEach(item => {
      if (!item || !item.logo || !item.url) return;
      const li = document.createElement('li');
      li.className = 'db-sponsors-ribbon__item';

      const link = document.createElement('a');
      link.className = 'db-sponsors-ribbon__logo';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'sponsored noopener';
      link.setAttribute('aria-label', `Visit ${item.name || 'sponsor'} website`);

      const img = document.createElement('img');
      img.src = normalizeLogoPath(item.logo);
      img.alt = `Sponsor logo: ${item.name || 'Sponsor'}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.height = 44; // CSS constrains actual display; height is a perf hint

      link.appendChild(img);
      li.appendChild(link);
      list.appendChild(li);
    });

    // CTA
    if (donationUrl) {
      const li = document.createElement('li');
      li.className = 'db-sponsors-ribbon__item db-sponsors-ribbon__cta';
      const a = document.createElement('a');
      a.className = 'md-button md-button--secondary';
      a.href = donationUrl;
      a.setAttribute('aria-label', 'Become a Sponsor');
      a.setAttribute('title', 'Become a Sponsor');
      // Inline heart icon (currentColor) + label
      a.innerHTML = `
        <svg class="db-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 21s-6.716-4.346-9.193-7.077C.41 11.34.764 7.72 3.23 5.69a5.01 5.01 0 0 1 6.54.38L12 8.39l2.23-2.32a5.01 5.01 0 0 1 6.54-.38c2.466 2.03 2.82 5.65.423 8.233C18.716 16.654 12 21 12 21z"/>
        </svg>
        <span>Become a Sponsor</span>`;
      li.appendChild(a);
      list.appendChild(li);
    }

    inner.appendChild(list);
    region.appendChild(inner);
    return region;
  }

  async function loadData(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load sponsors data');
      const data = await res.json();
      return data;
    } catch (e) {
      return null;
    }
  }

  onReady(async function init() {
    const header = document.querySelector('header.md-header');
    if (!header) return;

    const anchor = document.querySelector('.db-announcement') || header;

    const data = await loadData(DEFAULT_CONFIG.dataUrl);
    const donationUrl = (data && data.donationUrl) || DEFAULT_CONFIG.donationUrl;
    const sponsors = (data && Array.isArray(data.items) && data.items.length > 0)
      ? data.items
      : DEFAULT_CONFIG.fallbackSponsors;

    const ribbon = createRibbon(sponsors, donationUrl);
    // Insert after announcement if present; otherwise after header
    anchor.after(ribbon);

    function updateOffset() {
      const headerEl = document.querySelector('header.md-header');
      const announceEl = document.querySelector('.db-announcement');
      const headerH = headerEl ? headerEl.offsetHeight : 0;
      // avoid double-counting if announcement removed or not present
      const announceH = (announceEl && announceEl !== ribbon) ? announceEl.offsetHeight : 0;
      const total = headerH + announceH;
      document.documentElement.style.setProperty('--db-header-height', `${headerH}px`);
      document.documentElement.style.setProperty('--db-announcement-height', `${announceH}px`);
      document.documentElement.style.setProperty('--db-header-offset', `${total}px`);
    }

    updateOffset();
    window.addEventListener('resize', updateOffset);
    window.addEventListener('db:announcement-mounted', updateOffset);
    window.addEventListener('db:announcement-dismissed', updateOffset);
    // Recalculate once other async UI (like announcement) settles
    window.requestAnimationFrame(() => window.requestAnimationFrame(updateOffset));
    setTimeout(updateOffset, 400);

    // Auto-hide on scroll down, show on scroll up
    let lastScrollY = window.scrollY;
    let ticking = false;
    const scrollThreshold = 100; // Don't hide until scrolled at least 100px
    const scrollDelta = 10; // Minimum scroll movement to trigger hide/show

    function handleScroll() {
      const currentScrollY = window.scrollY;
      
      // Only hide if user has scrolled past the threshold
      if (currentScrollY > scrollThreshold) {
        // Check if scrolling down (and moved enough to matter)
        if (currentScrollY > lastScrollY + scrollDelta) {
          ribbon.classList.add('hidden');
        }
        // Check if scrolling up (and moved enough to matter)
        else if (currentScrollY < lastScrollY - scrollDelta) {
          ribbon.classList.remove('hidden');
        }
      } else {
        // Always show ribbon when near the top
        ribbon.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Only enable auto-hide if user doesn't prefer reduced motion
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  });
})();
