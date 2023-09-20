import { Language } from "./interfaces.js";
import { spanish, english } from "./languages.js";
import { projectsData } from "./projectsData.js";

const linkToAbout = document.querySelector<HTMLAnchorElement>('a[href="#perfil"]');
const languageButton = document.querySelector<HTMLButtonElement>(".language");
const linkToProjects = document.querySelector<HTMLAnchorElement>('a[href="#projects"]');
const linkToSkills = document.querySelector<HTMLAnchorElement>('a[href="#skillSet"]');
const linkToContact = document.querySelector<HTMLAnchorElement>('a[href="#contact"]');
const linkToMyCv = document.querySelector<HTMLAnchorElement>('a[href="https://github.com/jonathanbarsky/JonathanBarsky/raw/main/CV%20Barsky%20Jonathan.pdf"]');
const dataGreeting = document.querySelector<HTMLParagraphElement>(".perfil_data-greeting");
const dataTitle = document.querySelector<HTMLHeadingElement>(".perfil_data-title");
const perfilDescription = document.querySelector<HTMLParagraphElement>(".perfil_description");
const projectsTitle = document.querySelector<HTMLHeadingElement>(".projects_title");
const projectButtons = document.querySelectorAll<HTMLButtonElement>(".projectButton");
const projectsButtonDetails: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".projects_item-showData");
const skillSetTitle = document.querySelector<HTMLHeadingElement>(".skill-set_title");
const skillSetSubtitle = document.querySelector<HTMLHeadingElement>(".skill-set_subtitle");
const skillSetOthers = document.querySelector<HTMLHeadingElement>(".skill-set_others");
const skillSetInterested = document.querySelector<HTMLHeadingElement>(".skill-set_interested");
const contactTitle = document.querySelector<HTMLHeadingElement>(".contact_title");
const contactCta = document.querySelector<HTMLParagraphElement>(".contact_cta");


const setModalChanges = (isInEnglish: boolean) => {
    const modalTitle = document.querySelector<HTMLHeadingElement>(".card_title");
    const modalDescription = document.querySelector<HTMLParagraphElement>(".card_copy");
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
const setChanges = (language: Language)  => {
  if(!!linkToAbout){
    linkToAbout.innerText = `${language.nav.about}`
  }
  if(!!languageButton){
    languageButton.innerText = `${language.nav.language}`
  }
  if(!!linkToProjects){
    linkToProjects.innerText = `${language.nav.projects}`
  }
  if(!!linkToMyCv){
    linkToMyCv.innerText = `${language.nav.cv}`
  }
  if(!!linkToSkills){
    linkToSkills.innerText = `${language.nav.skills}`
  }
  if(!!linkToContact){
    linkToContact.innerText = `${language.nav.contact}`
  }
  if(!!dataGreeting){
    dataGreeting.innerText = `${language.profile.greeting}`;
  }
  if(!!dataTitle){
    dataTitle.innerText = `${language.profile.name}`;
  }
  if(!!perfilDescription){
    perfilDescription.innerText = `${language.profile.description}`;
  }
  if(!!projectsTitle){
    projectsTitle.innerText = `${language.projects.title}`;
  }
  for(const button of projectButtons){
      button.innerText = `${language.projects.projectButton}`;
  };
  for(const buttonDetail of projectsButtonDetails){
      buttonDetail.innerText = `${language.projects.projectsButtonDetails}`;
  };
  if(!!skillSetTitle){
    skillSetTitle.innerText = `${language.skillSet.title}`;
  }
  if(!!skillSetSubtitle){
    skillSetSubtitle.innerText = `${language.skillSet.subTitle1}`;
  }
  if(!!skillSetOthers){
    skillSetOthers.innerText = `${language.skillSet.subTitle2}`;
  }
  if(!!skillSetInterested){
    skillSetInterested.innerText = `${language.skillSet.interested}`
  }
  if(!!contactTitle){
    contactTitle.innerText = `${language.contact.title}`
  }
  if(!!contactCta){
    contactCta.innerText = `${language.contact.callToAction}`
  }
}

export async function changeLanguage(language: string, isInEnglish: boolean){
    language === "spanish" ? setChanges(spanish) : setChanges(english);
    setModalChanges(isInEnglish);
};
