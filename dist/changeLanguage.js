var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spanish, english } from "./languages.js";
import { projectsData } from "./projectsData.js";
const linkToAbout = document.querySelector('a[href="#perfil"]');
const languageButton = document.querySelector(".language");
const linkToProjects = document.querySelector('a[href="#projects"]');
const linkToSkills = document.querySelector('a[href="#skillSet"]');
const linkToContact = document.querySelector('a[href="#contact"]');
const linkToMyCv = document.querySelector('a[href="https://github.com/jonathanbarsky/JonathanBarsky/raw/main/CV%20Barsky%20Jonathan.pdf"]');
const dataGreeting = document.querySelector(".perfil_data-greeting");
const dataTitle = document.querySelector(".perfil_data-title");
const perfilDescription = document.querySelector(".perfil_description");
const projectsTitle = document.querySelector(".projects_title");
const projectButtons = document.querySelectorAll(".projectButton");
const projectsButtonDetails = document.querySelectorAll(".projects_item-showData");
const skillSetTitle = document.querySelector(".skill-set_title");
const skillSetSubtitle = document.querySelector(".skill-set_subtitle");
const skillSetOthers = document.querySelector(".skill-set_others");
const skillSetInterested = document.querySelector(".skill-set_interested");
const contactTitle = document.querySelector(".contact_title");
const contactCta = document.querySelector(".contact_cta");
const setModalChanges = (isInEnglish) => {
    const modalTitle = document.querySelector(".card_title");
    const modalDescription = document.querySelector(".card_copy");
    if (!!modalDescription && !!modalTitle) {
        projectsData.forEach(item => {
            if (item.name === modalTitle.textContent) {
                if (isInEnglish === true) {
                    modalDescription.innerText = `${item.englishProjectDescription}`;
                }
                else {
                    modalDescription.innerText = `${item.spanishProjectDescription}`;
                }
            }
        });
    }
};
const setChanges = (language) => {
    if (!!linkToAbout) {
        linkToAbout.innerText = `${language.nav.about}`;
    }
    if (!!languageButton) {
        languageButton.innerText = `${language.nav.language}`;
    }
    if (!!linkToProjects) {
        linkToProjects.innerText = `${language.nav.projects}`;
    }
    if (!!linkToMyCv) {
        linkToMyCv.innerText = `${language.nav.cv}`;
    }
    if (!!linkToSkills) {
        linkToSkills.innerText = `${language.nav.skills}`;
    }
    if (!!linkToContact) {
        linkToContact.innerText = `${language.nav.contact}`;
    }
    if (!!dataGreeting) {
        dataGreeting.innerText = `${language.profile.greeting}`;
    }
    if (!!dataTitle) {
        dataTitle.innerText = `${language.profile.name}`;
    }
    if (!!perfilDescription) {
        perfilDescription.innerText = `${language.profile.description}`;
    }
    if (!!projectsTitle) {
        projectsTitle.innerText = `${language.projects.title}`;
    }
    for (const button of projectButtons) {
        button.innerText = `${language.projects.projectButton}`;
    }
    ;
    for (const buttonDetail of projectsButtonDetails) {
        buttonDetail.innerText = `${language.projects.projectsButtonDetails}`;
    }
    ;
    if (!!skillSetTitle) {
        skillSetTitle.innerText = `${language.skillSet.title}`;
    }
    if (!!skillSetSubtitle) {
        skillSetSubtitle.innerText = `${language.skillSet.subTitle1}`;
    }
    if (!!skillSetOthers) {
        skillSetOthers.innerText = `${language.skillSet.subTitle2}`;
    }
    if (!!skillSetInterested) {
        skillSetInterested.innerText = `${language.skillSet.interested}`;
    }
    if (!!contactTitle) {
        contactTitle.innerText = `${language.contact.title}`;
    }
    if (!!contactCta) {
        contactCta.innerText = `${language.contact.callToAction}`;
    }
};
export function changeLanguage(language, isInEnglish) {
    return __awaiter(this, void 0, void 0, function* () {
        language === "spanish" ? setChanges(spanish) : setChanges(english);
        setModalChanges(isInEnglish);
    });
}
;
