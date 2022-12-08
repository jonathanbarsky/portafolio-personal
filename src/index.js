const iconMenu = document.querySelector(".header_nav-icon");
const navList = document.querySelector(".header_nav-list");
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

// let options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
// }

// let observer = new IntersectionObserver(funcionobservadora, options);

// let target = projectsContainer
// observer.observe(projectsContainer);

// let funcionobservadora = (entries, observer) => {
//     entries.forEach((entry) => {
        
//     });
// }

window.addEventListener("load", (event) => {
    const projectsContainer = document.querySelector("#projects");

createObserver();
}, false);

function createObserver() {
let observer;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
};

observer = new IntersectionObserver(handleIntersect, options);
observer.observe(projectsContainer);
}
function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
}

thresholds.push(0);
return thresholds;
}
function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
    entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
    entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
});
}