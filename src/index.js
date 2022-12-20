const iconMenu = document.querySelector(".header_nav-icon");
const navList = document.querySelector(".header_nav-list");

iconMenu.addEventListener("click", () => {
    if(!!navList.classList.contains("inactive")){
        navList.classList.remove("inactive");
        navList.classList.add("active");
    } else{
        navList.classList.remove("active");
        navList.classList.add("inactive");
    }
})


const animatedElement = document.querySelectorAll('.revealOnScroll');


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
        // else {
        // entry.target.classList.remove('animatedY animatedAlpha animatedX');
        // }

    });
});

animatedElement.forEach(item => {
    observer.observe(item);
});