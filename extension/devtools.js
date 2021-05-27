'use strict';

fetch('Custom.css')
  .then((res) => res.text())
  .then((styles) => {
    chrome.devtools.panels.applyStyleSheet(styles);
  });
