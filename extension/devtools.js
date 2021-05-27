fetch('Custom.min.css')
  .then((res) => res.text())
  .then((styles) => {
    chrome.devtools.panels.applyStyleSheet(styles);
  });
