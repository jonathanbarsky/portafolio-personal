//@ts-check
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { iconMenuToggle } from './iconMenuToggle.js';
import { showProjectDescription } from './showProjectDescription.js';
import { changeLanguage } from './changeLanguage.js';
const animatedElement = document.querySelectorAll('.revealOnScroll');
const buttonsShowProject = document.querySelectorAll(".projects_item-showData");
const iconMenu = document.querySelector(".nav-button");
const languageButton = document.querySelector(".language");
const flagElement = document.querySelector(".flags");
const perfilDescription = document.querySelector(".perfil_description");
let isInEnglish = false;
iconMenu === null || iconMenu === void 0 ? void 0 : iconMenu.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    iconMenuToggle();
}));
languageButton === null || languageButton === void 0 ? void 0 : languageButton.addEventListener("click", () => {
    flagElement === null || flagElement === void 0 ? void 0 : flagElement.classList.toggle("active");
});
let options = {
    root: null,
    rootMargin: "0px 0px -30px 0px",
    threshold: 0
};
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("ejeY")) {
                entry.target.classList.add('animatedY');
            }
            else if (entry.target.classList.contains("alpha")) {
                entry.target.classList.add('animatedAlpha');
            }
            else {
                entry.target.classList.add('animatedX');
            }
        }
    });
}, options);
animatedElement.forEach(item => {
    observer.observe(item);
});
buttonsShowProject === null || buttonsShowProject === void 0 ? void 0 : buttonsShowProject.forEach(item => {
    item.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
        showProjectDescription(event, isInEnglish);
    }));
});
flagElement === null || flagElement === void 0 ? void 0 : flagElement.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    if (!!e) {
        e.target.dataset.language === "spanish" ? isInEnglish = false : isInEnglish = true;
        changeLanguage(e.target.dataset.language, isInEnglish);
    }
}));
