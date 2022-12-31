const headerNav = document.querySelector(".header_nav");
const navList = document.querySelector(".header_nav-list");

export function iconMenuToggle() {
    if(!!navList.classList.contains("inactive")){
        navList.classList.remove("inactive");
        headerNav.classList.add("animated-menu");
        navList.classList.add("active");
    } else{
        headerNav.classList.remove("animated-menu");
        headerNav.classList.add("close-menu");
        setTimeout(() => {
            headerNav.classList.remove("close-menu");
        }, 1100)
        setTimeout(() => {
            navList.classList.remove("active");
            navList.classList.add("inactive");
        }, 1000)
    }
}