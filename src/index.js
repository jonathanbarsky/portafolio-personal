const animatedElement = document.querySelectorAll('.revealOnScroll');
const iconMenu = document.querySelector(".nav-button");

iconMenu.addEventListener("click", async function () {
    const modulo = await import('./iconMenuToggle.js')
    modulo.iconMenuToggle()
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