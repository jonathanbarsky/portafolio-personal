const iconMenu = document.querySelector(".header_nav-icon");
const navList = document.querySelector(".header_nav-list");
const projectsContainer = document.querySelector("#projects");
const projecto1 = document.querySelector("#projecto-1");
const projecto2 = document.querySelector("#projecto-2");
const projecto3 = document.querySelector("#projecto-3");
const projecto4 = document.querySelector("#projecto-4");
const projecto5 = document.querySelector("#projecto-5");
const listOfElements = [projecto1, projecto2,projecto3, projecto4,projecto5, projectsContainer];
iconMenu.addEventListener("click", () => {
    if(!!navList.classList.contains("inactive")){
        navList.classList.remove("inactive");
        navList.classList.add("active");
    } else{
        navList.classList.remove("active");
        navList.classList.add("inactive");
    }
})

