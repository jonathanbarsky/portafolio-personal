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
var animatedElement = document.querySelectorAll('.revealOnScroll');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("ejeY")) {
        entry.target.classList.add('animatedY');
      } else if (entry.target.classList.contains("alpha")) {
        entry.target.classList.add('animatedAlpha');
      } else {
        entry.target.classList.add('animatedX');
      }
    } // else {
    // entry.target.classList.remove('animatedY animatedAlpha animatedX');
    // }

  });
});
animatedElement.forEach(function (item) {
  observer.observe(item);
});