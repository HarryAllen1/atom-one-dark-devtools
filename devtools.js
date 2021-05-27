"use strict";
let x = new XMLHttpRequest();
x.open("GET", "Custom.css");
x.onload = () => {
  chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
