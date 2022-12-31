"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconMenuToggle = iconMenuToggle;
var headerNav = document.querySelector(".header_nav");
var navList = document.querySelector(".header_nav-list");

function iconMenuToggle() {
  if (!!navList.classList.contains("inactive")) {
    navList.classList.remove("inactive");
    headerNav.classList.add("animated-menu");
    navList.classList.add("active");
  } else {
    headerNav.classList.remove("animated-menu");
    headerNav.classList.add("close-menu");
    setTimeout(function () {
      headerNav.classList.remove("close-menu");
    }, 1100);
    setTimeout(function () {
      navList.classList.remove("active");
      navList.classList.add("inactive");
    }, 1000);
  }
}