fetch('Custom.min.css')
  .then((res) => res.text())
  .then((styles) => {
    chrome.devtools.panels.applyStyleSheet(styles);
  });

// adds class to codemirror javasrcipt functions
setInterval(() => {
  document
    .querySelectorAll(
      '#console-prompt > div > div.console-prompt-editor-container div.CodeMirror-scroll > div.CodeMirror-sizer div.CodeMirror-code > div > pre span.cm-js-property'
    )
    .forEach((el) => {
      if (el.nextSibling.data.trim().charAt(0) === '(') {
        el.classList.add('cm-js-function');
      }
    });
}, 1000);
