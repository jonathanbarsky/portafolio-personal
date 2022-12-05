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