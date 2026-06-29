// MathJax configuration for MkDocs Material with pymdownx.arithmatex
// Supports inline ($...$, \(...\)) and display ($$...$$, \[...\]) math
window.MathJax = {
  tex: {
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$"]
    ],
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"]
    ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: [
      'script', 'noscript', 'style', 'textarea', 'pre'
    ],
    ignoreHtmlClass: '.*|',
    processHtmlClass: 'arithmatex'
  }
};

