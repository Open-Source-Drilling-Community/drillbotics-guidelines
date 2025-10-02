// Adds a "Copy Markdown" button next to the "View source" action.
// It fetches the raw .md and copies it to the clipboard.
(function () {
  const VIEW_SELECTOR = 'a.md-content__button[title^="View source"]';
  const EDIT_SELECTOR = 'a.md-content__button[title^="Edit"], a.md-content__button[aria-label^="Edit"]';

  function toRawUrl(url) {
    try {
      const parsed = new URL(url, window.location.origin);
      const segments = parsed.pathname.split('/').filter(Boolean);

      if (parsed.hostname.endsWith('github.com') && segments.length > 4) {
        const kind = segments[2];
        if (kind === 'blob' || kind === 'edit' || kind === 'raw') {
          const owner = segments[0];
          const repo = segments[1];
          const branch = segments[3];
          const filePath = segments.slice(4).join('/');
          return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
        }
      }

      return parsed.href;
    } catch (_) {
      return url;
    }
  }

  function parseGitHubParts(url) {
    try {
      const parsed = new URL(url, window.location.origin);
      const segments = parsed.pathname.split('/').filter(Boolean);
      if (parsed.hostname.endsWith('github.com') && segments.length > 4) {
        const owner = segments[0];
        const repo = segments[1];
        const branch = segments[3];
        const filePath = segments.slice(4).join('/');
        return { owner, repo, branch, filePath };
      }
    } catch (_) {}
    return null;
  }

  async function writeToClipboard(text) {
    // Preferred modern API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {}
    }
    // Fallback for older/locked-down browsers
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand && document.execCommand('copy');
      document.body.removeChild(ta);
      return !!ok;
    } catch (_) {
      return false;
    }
  }

  async function writeHtmlToClipboard(html, textFallback = '') {
    if (navigator.clipboard && window.ClipboardItem) {
      try {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([textFallback], { type: 'text/plain' })
        });
        await navigator.clipboard.write([item]);
        return true;
      } catch (_) {}
    }
    // Fallback: copy via a temporary contenteditable container
    try {
      const div = document.createElement('div');
      div.contentEditable = 'true';
      div.style.position = 'fixed';
      div.style.left = '-9999px';
      div.style.top = '0';
      div.innerHTML = html;
      document.body.appendChild(div);

      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(div);
      selection.removeAllRanges();
      selection.addRange(range);
      const ok = document.execCommand && document.execCommand('copy');
      selection.removeAllRanges();
      document.body.removeChild(div);
      return !!ok;
    } catch (_) {
      return false;
    }
  }

  function extractPlainText(root) {
    const blocks = new Set(['P','DIV','SECTION','ARTICLE','HEADER','FOOTER','MAIN','ASIDE','H1','H2','H3','H4','H5','H6','PRE','BLOCKQUOTE','FIGURE','TABLE']);
    const stripUi = (s) => (s || '').replace(/[\u00B6]/g, ''); // remove pilcrow ¶
    function textOf(node, ctx = { indent: 0, olIndex: 1, listType: null }) {
      if (!node) return '';
      if (node.nodeType === Node.TEXT_NODE) {
        return stripUi(node.nodeValue).replace(/[ \t\f\v\u00A0]+/g, ' ');
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return '';
      const tag = node.tagName;
      let out = '';

      // Handle explicit breaks
      if (tag === 'BR' || tag === 'HR') {
        return '\n';
      }

      // Headings
      if (/^H[1-6]$/.test(tag)) {
        const t = stripUi(Array.from(node.childNodes).map(n => textOf(n, ctx)).join('').trim());
        if (t) out += (out && !out.endsWith('\n\n') ? '\n\n' : '') + t + '\n\n';
        return out;
      }

      // Lists
      if (tag === 'UL' || tag === 'OL') {
        let idx = 1;
        for (const li of Array.from(node.children)) {
          if (li.tagName !== 'LI') continue;
          const marker = tag === 'OL' ? `${idx}. ` : '- ';
          const childCtx = { indent: ctx.indent + 2, olIndex: 1, listType: tag };
          const body = Array.from(li.childNodes).map(n => textOf(n, childCtx)).join('').trim();
          out += ' '.repeat(ctx.indent) + marker + body + '\n';
          // Nested lists inside LI
          const nested = Array.from(li.children).filter(c => c.tagName === 'UL' || c.tagName === 'OL');
          for (const nl of nested) {
            out += textOf(nl, childCtx);
          }
          idx++;
        }
        if (!out.endsWith('\n\n')) out += '\n';
        return out;
      }

      // Links
      if (tag === 'A') {
        const href = node.getAttribute('href');
        const label = stripUi(Array.from(node.childNodes).map(n => textOf(n, ctx)).join(''));
        try {
          const abs = href ? new URL(href, window.location.href).href : '';
          if (abs && !label.includes(abs)) return `${label} (${abs})`;
        } catch (_) {}
        return label;
      }

      // Tables (very simple text layout)
      if (tag === 'TABLE') {
        const rows = [];
        const trs = node.querySelectorAll('tr');
        trs.forEach(tr => {
          const cells = Array.from(tr.children).map(td => textOf(td, ctx).trim());
          rows.push(cells.join(' | '));
        });
        return rows.join('\n') + '\n\n';
      }

      // Code blocks
      if (tag === 'PRE') {
        return (node.textContent || '').replace(/\s+$/, '') + '\n\n';
      }

      // Blockquotes
      if (tag === 'BLOCKQUOTE') {
        const inner = Array.from(node.childNodes).map(n => textOf(n, ctx)).join('').split('\n').map(l => l ? `> ${l}` : l).join('\n');
        return inner + '\n\n';
      }

      // Generic block/inline handling
      let child = '';
      for (const n of Array.from(node.childNodes)) child += textOf(n, ctx);
      if (blocks.has(tag)) {
        child = child.trim();
        if (child) out += child + '\n\n';
        return out;
      }
      return child;
    }

    let result = stripUi(textOf(root)).replace(/\n{3,}/g, '\n\n');
    return result.trim() + '\n';
  }

  function mount() {
    try {
      // Find the existing "View source of this page" (fallback to edit link if missing)
      const viewLink = document.querySelector(VIEW_SELECTOR) || document.querySelector(EDIT_SELECTOR);
      if (!viewLink) return;

      // Avoid duplicates
      const hasMd = !!document.querySelector('.db-copy-md-button');
      const hasText = !!document.querySelector('.db-copy-text-button');
      const hasRich = !!document.querySelector('.db-copy-rich-button');
      if (hasMd && hasText && hasRich) return;

      // Markdown copy button
      let btnMd = document.querySelector('.db-copy-md-button');
      if (!btnMd) {
        btnMd = document.createElement('a');
        btnMd.href = '#';
        btnMd.className = 'md-content__button md-icon db-copy-md-button';
        btnMd.title = 'Copy Markdown of this page';
        btnMd.setAttribute('aria-label', 'Copy Markdown of this page');
        btnMd.setAttribute('role', 'button');
        btnMd.setAttribute('tabindex', '0');
        // Ensure it's clickable and not overlapped
        btnMd.style.pointerEvents = 'auto';
        btnMd.style.cursor = 'pointer';
        btnMd.style.position = 'relative';
        btnMd.style.zIndex = '2';
        btnMd.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>';
      }

      async function copyMarkdown(ev) {
        // Avoid accidental navigation when clicking the button
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }

        // Resolve the current view/edit link at click time (handles instant navigation)
        const currentLink = document.querySelector(VIEW_SELECTOR) || document.querySelector(EDIT_SELECTOR);
        const url = currentLink && currentLink.getAttribute('href');
        if (!url) return;
        const rawUrl = toRawUrl(url);
        const prevTitle = btnMd.title;
        try {
          btnMd.setAttribute('aria-busy', 'true');
          btnMd.title = 'Copying…';
          // First try direct raw URL (CORS-friendly when using raw.githubusercontent.com)
          let text = null;
          let res;
          try {
            res = await fetch(rawUrl, { cache: 'no-store', redirect: 'follow' });
            if (res.ok) {
              text = await res.text();
            } else {
              throw new Error(`HTTP ${res.status}`);
            }
          } catch (fetchErr) {
            // If blocked by CORS/redirect on github.com, try GitHub API as a fallback
            const parts = parseGitHubParts(url);
            if (!parts) throw fetchErr;
            const apiUrl = `https://api.github.com/repos/${parts.owner}/${parts.repo}/contents/${parts.filePath}?ref=${encodeURIComponent(parts.branch)}`;
            const apiRes = await fetch(apiUrl, { cache: 'no-store' });
            if (!apiRes.ok) throw new Error(`API HTTP ${apiRes.status}`);
            const data = await apiRes.json();
            if (data && data.content) {
              // content is base64-encoded
              try {
                text = atob(data.content.replace(/\n/g, ''));
              } catch (e) {
                // Fallback decode if atob fails
                text = decodeURIComponent(escape(window.atob(data.content.replace(/\n/g, ''))));
              }
            } else {
              throw new Error('API missing content');
            }
          }
          const ok = await writeToClipboard(text);
          btnMd.title = ok ? 'Copied!' : 'Copy failed';
        } catch (e) {
          console.error('Copy Markdown failed', e);
          btnMd.title = 'Copy failed';
        } finally {
          setTimeout(() => { btnMd.title = prevTitle; btnMd.removeAttribute('aria-busy'); }, 1200);
        }
      }

      btnMd.addEventListener('click', copyMarkdown);
      btnMd.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') copyMarkdown(ev);
      });

      // Insert Markdown button right after the view/edit link
      if (!hasMd) viewLink.parentNode.insertBefore(btnMd, viewLink.nextSibling);

      // Plain text copy button
      let btnText = document.querySelector('.db-copy-text-button');
      if (!btnText) {
        btnText = document.createElement('a');
        btnText.href = '#';
        btnText.className = 'md-content__button md-icon db-copy-text-button';
        btnText.title = 'Copy Text of this page';
        btnText.setAttribute('aria-label', 'Copy Text of this page');
        btnText.setAttribute('role', 'button');
        btnText.setAttribute('tabindex', '0');
        btnText.style.pointerEvents = 'auto';
        btnText.style.cursor = 'pointer';
        btnText.style.position = 'relative';
        btnText.style.zIndex = '2';
        // Slightly different icon (single document)
        btnText.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15z"/></svg>';
      }

      async function copyText(ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        const prevTitle = btnText.title;
        try {
          btnText.setAttribute('aria-busy', 'true');
          btnText.title = 'Copying…';
          const article = document.querySelector('article.md-content__inner') || document.querySelector('.md-content__inner');
          let text;
          if (article) {
            const clone = article.cloneNode(true);
            clone.querySelectorAll('.md-content__button, nav, .toc, .md-source-file, .md-edit, a.headerlink, .md-content__anchor, .headerlink, script, style').forEach((el) => el.remove());
            text = extractPlainText(clone);
          } else {
            text = extractPlainText(document.body);
          }
          const ok = await writeToClipboard(text || '');
          btnText.title = ok ? 'Copied!' : 'Copy failed';
        } catch (e) {
          console.error('Copy Text failed', e);
          btnText.title = 'Copy failed';
        } finally {
          setTimeout(() => { btnText.title = prevTitle; btnText.removeAttribute('aria-busy'); }, 1200);
        }
      }

      btnText.addEventListener('click', copyText);
      btnText.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') copyText(ev);
      });

      // Place Text button after Markdown button
      if (!hasText) btnMd.parentNode.insertBefore(btnText, btnMd.nextSibling);

      // Rich (formatted) copy button
      let btnRich = document.querySelector('.db-copy-rich-button');
      if (!btnRich) {
        btnRich = document.createElement('a');
        btnRich.href = '#';
        btnRich.className = 'md-content__button md-icon db-copy-rich-button';
        btnRich.title = 'Copy Formatted (Email/Word/Human Friendly) of this page';
        btnRich.setAttribute('aria-label', 'Copy Formatted (Email/Word/Human Friendly) of this page');
        btnRich.setAttribute('role', 'button');
        btnRich.setAttribute('tabindex', '0');
        btnRich.style.pointerEvents = 'auto';
        btnRich.style.cursor = 'pointer';
        btnRich.style.position = 'relative';
        btnRich.style.zIndex = '2';
        // Icon: two docs with T marker
        btnRich.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zM19 5H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 5h8v1.5h-3V18h-2v-6.5H11V10z"/></svg>';
      }

      function absolutizeLinks(root) {
        root.querySelectorAll('a[href]').forEach((a) => {
          try {
            const href = a.getAttribute('href');
            if (!href) return;
            const abs = new URL(href, window.location.href).href;
            a.setAttribute('href', abs);
          } catch (_) {}
        });
      }

      function inlineMinimalStyles(root) {
        // Headings spacing
        root.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((el) => {
          el.style.margin = '1em 0 0.6em';
          el.style.fontWeight = '600';
        });
        // Paragraph spacing
        root.querySelectorAll('p').forEach((el) => {
          el.style.margin = '0.6em 0';
        });
        // Lists spacing
        root.querySelectorAll('ul,ol').forEach((el) => {
          el.style.margin = '0.6em 0 0.6em 1.2em';
        });
        // Code blocks
        root.querySelectorAll('pre').forEach((el) => {
          el.style.background = '#f5f5f5';
          el.style.padding = '12px';
          el.style.borderRadius = '6px';
          el.style.overflow = 'auto';
          el.style.fontFamily = 'Menlo, Consolas, monospace';
          el.style.fontSize = '0.9em';
        });
        root.querySelectorAll('code').forEach((el) => {
          if (el.parentElement && el.parentElement.tagName.toLowerCase() === 'pre') return;
          el.style.background = '#f5f5f5';
          el.style.padding = '2px 4px';
          el.style.borderRadius = '4px';
          el.style.fontFamily = 'Menlo, Consolas, monospace';
          el.style.fontSize = '0.95em';
        });
        // Tables
        root.querySelectorAll('table').forEach((el) => {
          el.style.borderCollapse = 'collapse';
          el.style.width = '100%';
        });
        root.querySelectorAll('th,td').forEach((el) => {
          el.style.border = '1px solid #ccc';
          el.style.padding = '6px 8px';
          el.style.textAlign = 'left';
          el.style.verticalAlign = 'top';
        });
        // Blockquotes
        root.querySelectorAll('blockquote').forEach((el) => {
          el.style.borderLeft = '4px solid #ccc';
          el.style.margin = '0.6em 0';
          el.style.padding = '8px 12px';
          el.style.color = '#444';
          el.style.background = '#fafafa';
        });
      }

      function cleanArticleForHtml(root) {
        // Remove non-content elements
        root.querySelectorAll('.md-content__button, nav, .toc, .md-source-file, .md-edit, script, style').forEach((el) => el.remove());
        // Remove permalinks inside headings
        root.querySelectorAll('a.headerlink, .md-content__anchor').forEach((el) => el.remove());
        absolutizeLinks(root);
        inlineMinimalStyles(root);
        return root.innerHTML;
      }

      async function copyRich(ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        const prevTitle = btnRich.title;
        try {
          btnRich.setAttribute('aria-busy', 'true');
          btnRich.title = 'Copying…';
          const article = document.querySelector('article.md-content__inner') || document.querySelector('.md-content__inner');
          const container = document.createElement('div');
          if (article) {
            const clone = article.cloneNode(true);
            const html = cleanArticleForHtml(clone);
            const text = clone.innerText;
            const ok = await writeHtmlToClipboard(html, text);
            btnRich.title = ok ? 'Copied!' : 'Copy failed';
          } else {
            const ok = await writeHtmlToClipboard('<div></div>', document.body.innerText);
            btnRich.title = ok ? 'Copied!' : 'Copy failed';
          }
        } catch (e) {
          console.error('Copy Rich failed', e);
          btnRich.title = 'Copy failed';
        } finally {
          setTimeout(() => { btnRich.title = prevTitle; btnRich.removeAttribute('aria-busy'); }, 1200);
        }
      }

      btnRich.addEventListener('click', copyRich);
      btnRich.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') copyRich(ev);
      });

      // Place Rich button after Text button
      if (!hasRich) btnText.parentNode.insertBefore(btnRich, btnText.nextSibling);
    } catch (_) { /* no-op */ }
  }

  // Handle initial load and Material's instant navigation
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(() => {
      // Defer to next frame to allow Material to render action buttons
      requestAnimationFrame(() => {
        mount();
      });
    });
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(mount));
  } else {
    requestAnimationFrame(mount);
  }
})();
