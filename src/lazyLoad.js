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



const isIntersecting = (entry) => {
    return entry.isIntersecting;
}
const accion = () => {
    console.log("holis")
}
let observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(accion)
})
const registerItem = (item) => {
    observer.observe(item)
}
listOfElements.forEach((item) => registerItem(item));
// registerItem(projecto2)
// registerItem(projecto3)
// registerItem(projecto4)