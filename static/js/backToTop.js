"use strict";

var viewportHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);

function backToTop() {
  var currentScrollPos = window.pageYOffset;

  var component = document.getElementsByClassName("back-to-top")[0];

  if (currentScrollPos < viewportHeight) {
    component.style.bottom = "-" + (component.offsetHeight + 15) + "px";
  }

  if (currentScrollPos > viewportHeight / 2) {
    component.style.bottom = null;
    component.style.visibility = "visible";
  }
}