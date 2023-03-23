"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLanguage = changeLanguage;

var _languages = require("./languages.js");

var linkToAbout = document.querySelector('a[href="#perfil"]');
var linkToProjects = document.querySelector('a[href="#projects"]');
var linkToSkills = document.querySelector('a[href="#skillSet"]');
var linkToContact = document.querySelector('a[href="#contact"]');
var dataGreeting = document.querySelector(".perfil_data-greeting");
var dataTitle = document.querySelector(".perfil_data-title");
var perfilDescription = document.querySelector(".perfil_description");
var projectsTitle = document.querySelector(".projects_title");
var projectButtons = document.querySelectorAll(".projectButton");
var skillSetTitle = document.querySelector(".skill-set_title");
var skillSetSubtitle = document.querySelector(".skill-set_subtitle");
var skillSetOthers = document.querySelector(".skill-set_others");
var skillSetInterested = document.querySelector(".skill-set_interested");
var contactTitle = document.querySelector(".contact_title");
var contactCta = document.querySelector(".contact_cta");

var setChanges = function setChanges(language) {
  linkToAbout.innerText = "".concat(language.nav.about);
  linkToProjects.innerText = "".concat(language.nav.projects);
  linkToSkills.innerText = "".concat(language.nav.skills);
  linkToContact.innerText = "".concat(language.nav.contact);
  dataGreeting.innerText = "".concat(language.profile.greeting);
  dataTitle.innerText = "".concat(language.profile.name);
  perfilDescription.innerText = "".concat(language.profile.description);
  projectsTitle.innerText = "".concat(language.projects.title);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = projectButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var button = _step.value;
      button.innerText = "".concat(language.projects.projectButton);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  skillSetTitle.innerText = "".concat(language.skillSet.title);
  skillSetSubtitle.innerText = "".concat(language.skillSet.subTitle1);
  skillSetOthers.innerText = "".concat(language.skillSet.subTitle2);
  skillSetInterested.innerText = "".concat(language.skillSet.interested);
  contactTitle.innerText = "".concat(language.contact.title);
  contactCta.innerText = "".concat(language.contact.callToAction);
};

function changeLanguage(language) {
  return regeneratorRuntime.async(function changeLanguage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          language === "spanish" ? setChanges(_languages.spanish) : setChanges(_languages.english);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

;