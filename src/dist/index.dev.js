"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var animatedElement = document.querySelectorAll('.revealOnScroll');
var iconMenu = document.querySelector(".nav-button");
var languageButton = document.querySelector(".language");
var flagElement = document.querySelector(".flags");
var perfilDescription = document.querySelector(".perfil_description");
var buttonsShowProject = document.querySelectorAll(".projects_item-showData");
var isInEnglish = false;
iconMenu.addEventListener("click", function _callee() {
  var modulo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./iconMenuToggle.js'));
          }));

        case 2:
          modulo = _context.sent;
          modulo.iconMenuToggle();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
languageButton.addEventListener("click", function () {
  flagElement.classList.toggle("active");
});
var options = {
  root: null,
  rootMargin: "0px 0px -30px 0px",
  threshold: 0
};
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
    }
  });
}, options);
animatedElement.forEach(function (item) {
  observer.observe(item);
});
buttonsShowProject.forEach(function (item) {
  item.addEventListener("click", function _callee2(event) {
    var modulo;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./showProjectDescription.js"));
            }));

          case 2:
            modulo = _context2.sent;
            modulo.showProjectDescription(event, isInEnglish);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});
flagElement.addEventListener("click", function _callee3(e) {
  var modulo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          e.target.parentElement.dataset.language === "spanish" ? isInEnglish = false : isInEnglish = true;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./changeLanguage.js"));
          }));

        case 3:
          modulo = _context3.sent;
          modulo.changeLanguage(e.target.parentElement.dataset.language, isInEnglish);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});