var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const headerNav = document.querySelector(".header_nav");
const navList = document.querySelector(".header_nav-list");
export function iconMenuToggle() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!!navList) {
            if (!!navList.classList.contains("inactive")) {
                navList.classList.remove("inactive");
                if (!!headerNav) {
                    headerNav.classList.add("animated-menu");
                }
                navList.classList.add("active");
            }
            else {
                if (!!headerNav) {
                    headerNav.classList.remove("animated-menu");
                    headerNav.classList.add("close-menu");
                    setTimeout(() => {
                        headerNav.classList.remove("close-menu");
                    }, 1100);
                    setTimeout(() => {
                        navList.classList.remove("active");
                        navList.classList.add("inactive");
                    }, 900);
                }
            }
        }
    });
}
