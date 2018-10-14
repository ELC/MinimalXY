"use strict";

var prevScrollpos = window.pageYOffset;

var delta = 70;

var navBtn = document.getElementById("nav-menu-btn");

var component = document.getElementsByClassName("nav-bar")[0];

document.getElementsByTagName("body")[0].addEventListener("click", hideOnClick);

function hideOnClick(e) {
  if (!component.contains(e.target) && navBtn.checked) {
    event.preventDefault();
    navBtn.checked = false;
  }
}

function hideMenu() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    return;
  }

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos + delta) {
    component.style.transform = "translateY(0px)";
    prevScrollpos = currentScrollPos;
  }

  if (prevScrollpos < currentScrollPos - delta) {
    component.style.transform = "translateY(-" + component.offsetHeight + "px)";

    navBtn.checked = false;

    prevScrollpos = currentScrollPos;
  }
}
