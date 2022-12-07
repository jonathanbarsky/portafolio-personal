"use strict";

// document.addEventListener("DOMContentLoaded", () => {
//     const chargeSection = (entradas, observador) => {
//         console.log(entradas);
//         entradas.forEach(entrada => {
//             if(entrada.isIntersecting){
//                 entrada.target.classList.add("visible");
//             } else{
//                 entrada.target.classList.remove("visible");
//             }
//         });
//     };
//     const observador = new IntersectionObserver(chargeSection, {
//         root: null,
//         rootMargin: '0px 0px 0px 0px',
//         threshold: 1,
//     }, options);
//     observador.observe(projectsContainer);
//     observador.observe(projecto1);
// })
var isIntersecting = function isIntersecting(entry) {
  return entry.isIntersecting;
};

var accion = function accion() {
  console.log("holis");
};

var observer = new IntersectionObserver(function (entries) {
  entries.filter(isIntersecting).forEach(accion);
});

var registerItem = function registerItem(item) {
  observer.observe(item);
};

listOfElements.forEach(function (item) {
  return registerItem(item);
}); // registerItem(projecto2)
// registerItem(projecto3)
// registerItem(projecto4)