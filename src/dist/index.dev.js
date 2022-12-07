"use strict";

var iconMenu = document.querySelector(".header_nav-icon");
var navList = document.querySelector(".header_nav-list");
var projectsContainer = document.querySelector("#projects");
var projecto1 = document.querySelector("#projecto-1");
var projecto2 = document.querySelector("#projecto-2");
var projecto3 = document.querySelector("#projecto-3");
var projecto4 = document.querySelector("#projecto-4");
var projecto5 = document.querySelector("#projecto-5");
var listOfElements = [projecto1, projecto2, projecto3, projecto4, projecto5, projectsContainer];
iconMenu.addEventListener("click", function () {
  if (!!navList.classList.contains("inactive")) {
    navList.classList.remove("inactive");
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
    navList.classList.add("inactive");
  }
});