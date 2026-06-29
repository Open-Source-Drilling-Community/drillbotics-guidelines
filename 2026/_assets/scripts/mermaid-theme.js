/*
  Mermaid theme switcher for Material for MkDocs
  - Detects the active palette (light/dark)
  - Initializes Mermaid with a matching theme
  - Re-runs rendering when palette or page changes
  - Optionally lazy-loads Mermaid from a CDN if not present
*/
(function () {
  if (window.__db_mermaid_theme_inited) return;
  window.__db_mermaid_theme_inited = true;

  var MERMAID_CDN = "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js";

  function currentScheme() {
    return document.documentElement.getAttribute("data-md-color-scheme") || "default";
  }

  function ensureMermaid(cb) {
    if (window.mermaid) return cb();
    try {
      var s = document.createElement("script");
      s.src = MERMAID_CDN;
      s.defer = true;
      s.onload = function () { cb(); };
      document.head.appendChild(s);
    } catch (_) { /* no-op */ }
  }

  function renderMermaid() {
    if (!window.mermaid) return;
    var dark = currentScheme() === "slate";
    try {
      // Keep Mermaid base styles; let CSS variables handle colors
      window.mermaid.initialize({ startOnLoad: false, theme: "base" });
      if (typeof window.mermaid.run === "function") {
        window.mermaid.run({ querySelector: ".mermaid, pre > code.language-mermaid, pre > code.mermaid" });
      } else if (typeof window.mermaid.init === "function") {
        var nodes = document.querySelectorAll(".mermaid, pre > code.language-mermaid, pre > code.mermaid");
        window.mermaid.init(undefined, nodes);
      }
    } catch (e) {
      if (window.console && console.debug) console.debug("Mermaid re-init failed", e);
    }
  }

  function onPaletteChange(handler) {
    try {
      var target = document.documentElement;
      var obs = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].type === "attributes" && mutations[i].attributeName === "data-md-color-scheme") {
            handler();
            break;
          }
        }
      });
      obs.observe(target, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    } catch (_) { /* no-op */ }
  }

  function mount() {
    ensureMermaid(function () {
      renderMermaid();
      onPaletteChange(renderMermaid);
    });
  }

  // Run on initial page load and on Material's instant navigation
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(mount);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
