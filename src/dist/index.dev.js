"use strict";

var iconMenu = document.querySelector(".header_nav-icon");
var navList = document.querySelector(".header_nav-list");
iconMenu.addEventListener("click", function () {
  if (!!navList.classList.contains("inactive")) {
    navList.classList.remove("inactive");
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
    navList.classList.add("inactive");
  }
});