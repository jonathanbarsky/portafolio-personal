const headerNav = document.querySelector<HTMLDivElement>(".header_nav");
const navList = document.querySelector<HTMLUListElement>(".header_nav-list");

export async function iconMenuToggle() {
  if(!!navList){
    if(!!navList.classList.contains("inactive")){
        navList.classList.remove("inactive");
        if(!!headerNav){
          headerNav.classList.add("animated-menu");
        }
        navList.classList.add("active");
    } else{
      if(!!headerNav){
        headerNav.classList.remove("animated-menu");
        headerNav.classList.add("close-menu");
        setTimeout(() => {
          headerNav.classList.remove("close-menu");
        }, 1100)
        setTimeout(() => {
          navList.classList.remove("active");
          navList.classList.add("inactive");
        }, 900)
      }
    }

  }
}
