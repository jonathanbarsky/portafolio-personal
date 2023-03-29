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
    if(!!modalDescription && !!modalTitle){
        projectsData.forEach(item => {
            if(item.name === modalTitle.textContent){
                if(isInEnglish === true){
                    modalDescription.innerText = `${item.englishProjectDescription}`       
                } else {
                    modalDescription.innerText = `${item.spanishProjectDescription}`    
                }
            }
        })
    }
}
const setChanges = (language)  => {
    linkToAbout.innerText = `${language.nav.about}`
    languageButton.innerText = `${language.nav.language}`
    linkToProjects.innerText = `${language.nav.projects}`
    linkToMyCv.innerText = `${language.nav.cv}`
    linkToSkills.innerText = `${language.nav.skills}`
    linkToContact.innerText = `${language.nav.contact}`
    dataGreeting.innerText = `${language.profile.greeting}`;
    dataTitle.innerText = `${language.profile.name}`;
    perfilDescription.innerText = `${language.profile.description}`;
    projectsTitle.innerText = `${language.projects.title}`;
    for(const button of projectButtons){
        button.innerText = `${language.projects.projectButton}`;
    };
    for(const buttonDetail of projectsButtonDetails){
        buttonDetail.innerText = `${language.projects.projectsButtonDetails}`;
    };
    skillSetTitle.innerText = `${language.skillSet.title}`;
    skillSetSubtitle.innerText = `${language.skillSet.subTitle1}`;
    skillSetOthers.innerText = `${language.skillSet.subTitle2}`;
    skillSetInterested.innerText = `${language.skillSet.interested}`
    contactTitle.innerText = `${language.contact.title}`
    contactCta.innerText = `${language.contact.callToAction}`
}

export async function changeLanguage(language, isInEnglish){
    language === "spanish" ? setChanges(spanish) : setChanges(english);
    setModalChanges(isInEnglish);
};