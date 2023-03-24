const animatedElement = document.querySelectorAll('.revealOnScroll');
const iconMenu = document.querySelector(".nav-button");
const languageButton = document.querySelector(".language");
const flagElement = document.querySelector(".flags");
const perfilDescription = document.querySelector(".perfil_description");
const buttonsShowProject = document.querySelectorAll(".projects_item-showData")

flagElement.addEventListener("click", async (e) => {
    const modulo = await import("./changeLanguage.js")
    modulo.changeLanguage(e.target.parentElement.dataset.language)
});

iconMenu.addEventListener("click", async function () {
    const modulo = await import('./iconMenuToggle.js')
    modulo.iconMenuToggle()
})
languageButton.addEventListener("click", () => {
    flagElement.classList.toggle("active")
})

let options = {
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
buttonsShowProject.forEach(item => {
    item.addEventListener("click", async (event) => {
        const modulo = await import("./showProjectDescription.js")
        modulo.showProjectDescription(event);
    })
})