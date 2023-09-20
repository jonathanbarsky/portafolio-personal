//@ts-check

import {iconMenuToggle} from './iconMenuToggle.js';
import { showProjectDescription } from './showProjectDescription.js';
import { changeLanguage } from './changeLanguage.js';

const animatedElement:NodeListOf<HTMLElement> = document.querySelectorAll('.revealOnScroll');
const buttonsShowProject: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".projects_item-showData")
const iconMenu: (HTMLButtonElement | null) = document.querySelector(".nav-button");
const languageButton: (HTMLButtonElement | null) = document.querySelector(".language");
const flagElement: (HTMLButtonElement | null)= document.querySelector(".flags");
const perfilDescription: (HTMLParagraphElement | null) = document.querySelector(".perfil_description");

let isInEnglish: boolean = false;

iconMenu?.addEventListener("click", async () => {
  iconMenuToggle();
}
)
languageButton?.addEventListener("click", () => {
    flagElement?.classList.toggle("active")
})

let options: {} = {
    root: null,
    rootMargin: "0px 0px -30px 0px",
    threshold: 0
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.classList.contains("ejeY")){
                entry.target.classList.add('animatedY');
            } else if(entry.target.classList.contains("alpha")){
                entry.target.classList.add('animatedAlpha');
            } else{
                entry.target.classList.add('animatedX');
            }
        }
    });
}, options);

animatedElement.forEach(item => {
    observer.observe(item);
});

buttonsShowProject?.forEach (item => {
    item.addEventListener("click", async (event) => {
        showProjectDescription(event, isInEnglish);
    })
})

flagElement?.addEventListener("click", async (e) => {
  if(!!e){
    (<HTMLElement>e.target).dataset.language === "spanish"? isInEnglish = false : isInEnglish = true;
    changeLanguage((<HTMLElement>e.target).dataset.language!, isInEnglish);
  }
});
