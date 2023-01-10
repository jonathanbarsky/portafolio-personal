// const flagElement = document.querySelector(".flags")

// const check = document.querySelector(".check");

// const textsToChange = document.querySelectorAll("[data-section]");

// flagElement.addEventListener("click", (e) => {
//     changeLanguage(e.target.parentElement.dataset.language)
// });

// const changeLanguage = async (language) => {
//     // const requestJson = await fetch(`./languages/en.json`);
//     const requestJson = await fetch(`http://127.0.0.1/:5500/languages/${language}.json`);
//     const texts = await requestJson.json();

//     for(const textToChange of textsToChange){
//         const section = textToChange.dataset.section;
//         const value = textToChange.dataset.value;

//         textToChange.innerHTML = texts[section][value]
//     }
// }
