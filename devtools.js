'use strict';
let x = new XMLHttpRequest();
x.open('GET', 'Custom.css');
x.onload = () => {
  chrome.devtools.panels.applyStyleSheet(x.responseText);
  let devToolsScript = document.createElement('script');
  devToolsScript.onload = () => {
    console.log('created script');
  };
  devToolsScript.src = 'inject.js';
  document.getElementsByTagName('head')[0].appendChild(devToolsScript);
};
x.send();
