import {projectsData} from "./projectsData.js";

const card = document.querySelector(".card");
function showCard(){
    card.classList.remove("inactive")
    card.classList.add("active-grid")
    card.classList.add("animatedAlpha")
    card.classList.remove("card_aside-hidden")
}
function closeCard(){
    card.classList.add("card_aside-hidden")
    setTimeout(() => {
        card.classList.remove("active-grid")
        card.classList.remove("animatedAlpha")
        card.classList.add("inactive");
        card.removeChild(document.querySelector(".card_aside"));
        card.removeChild(document.querySelector(".card_closeButton"));
        card.removeChild(document.querySelector(".card_header"));
        card.removeChild(document.querySelector(".card_body"));
    }, 1500)
}

function makeCard(item, isInEnglish) {
    const cardAside = document.createElement("aside");
    const cardSlider = document.createElement("div");
    const cardSlides = document.createElement("div");
    const cardSLide1 = document.createElement("div");
    const cardSLide2 = document.createElement("div");
    const cardSLide3 = document.createElement("div");
    const cardFigure1 = document.createElement("figure");
    const cardFigure2 = document.createElement("figure");
    const cardFigure3 = document.createElement("figure");
    const cardImgmobile = document.createElement("img")
    const cardImgTablet = document.createElement("img")
    const cardImgDesktop = document.createElement("img")
    const backArrow1 = document.createElement("a");
    const backArrow2 = document.createElement("a");
    const backArrow3 = document.createElement("a");
    const nextArrow1 = document.createElement("a");
    const nextArrow2 = document.createElement("a");
    const nextArrow3 = document.createElement("a");
    const sliderNav = document.createElement("div");
    const cardSliderNavlink1 = document.createElement("a");
    const cardSliderNavlink2 = document.createElement("a");
    const cardSliderNavlink3 = document.createElement("a");

    backArrow1.classList.add("card_slide-prev");
    backArrow1.setAttribute("title", "Next");
    backArrow1.setAttribute("href", "#slides_3");
    backArrow2.classList.add("card_slide-prev");
    backArrow2.setAttribute("title", "Prev");
    backArrow2.setAttribute("href", "#slides_1");
    backArrow3.classList.add("card_slide-prev");
    backArrow3.setAttribute("title", "Prev");
    backArrow3.setAttribute("href", "#slides_2");
    nextArrow1.classList.add("card_slide-next");
    nextArrow1.setAttribute("title", "Next");
    nextArrow1.setAttribute("href", "#slides_2");
    nextArrow2.classList.add("card_slide-next");
    nextArrow2.setAttribute("title", "Next");
    nextArrow2.setAttribute("href", "#slides_3");
    nextArrow3.classList.add("card_slide-next");
    nextArrow3.setAttribute("title", "Next");
    nextArrow3.setAttribute("href", "#slides_1")
    cardImgmobile.setAttribute("src", `${item.imgMobile}`);
    cardImgTablet.setAttribute("src", `${item.imgTablet}`);
    cardImgDesktop.setAttribute("src", `${item.imgDesktop}`);
    cardImgmobile.classList.add("card_img");
    cardImgTablet.classList.add("card_img");
    cardImgDesktop.classList.add("card_img");
    cardFigure1.classList.add("card_figure");
    cardFigure1.appendChild(cardImgmobile);
    cardFigure2.classList.add("card_figure");
    cardFigure2.appendChild(cardImgTablet);
    cardFigure3.classList.add("card_figure");
    cardFigure3.appendChild(cardImgDesktop);

    cardSliderNavlink1.classList.add("card_slider-navlink");
    cardSliderNavlink1.setAttribute("href", "#slides_1");
    cardSliderNavlink2.classList.add("card_slider-navlink");
    cardSliderNavlink2.setAttribute("href", "#slides_2");
    cardSliderNavlink3.classList.add("card_slider-navlink");
    cardSliderNavlink3.setAttribute("href", "#slides_3");

    cardSLide1.classList.add("card_slide");
    cardSLide2.classList.add("card_slide");
    cardSLide3.classList.add("card_slide");
    cardSLide1.setAttribute("id", "slides_1");
    cardSLide2.setAttribute("id", "slides_2");
    cardSLide3.setAttribute("id", "slides_3");

    cardSLide1.append(cardFigure1, backArrow1, nextArrow1);
    cardSLide2.append(cardFigure2, backArrow2, nextArrow2);
    cardSLide3.append(cardFigure3, backArrow3, nextArrow3);
    cardSlides.classList.add("card_slides")
    cardSlides.append(cardSLide1, cardSLide2, cardSLide3);
    sliderNav.classList.add("card_slider-nav")
    sliderNav.append(cardSliderNavlink1, cardSliderNavlink2, cardSliderNavlink3);
    cardSlider.classList.add("card_slider")
    cardSlider.append(cardSlides, sliderNav);
    cardAside.classList.add("card_aside");
    cardAside.appendChild(cardSlider);

    const header = document.createElement("header");
    const title = document.createElement("H2");
    const body = document.createElement("div");
    const copy = document.createElement("p");

    header.classList.add("card_header");
    title.classList.add("card_title");
    title.innerText = `${item.name}`;
    body.classList.add("card_body");
    copy.classList.add("card_copy");
    copy.innerText = `${item.spanishProjectDescription}`;
    if(isInEnglish === false){
        copy.innerText = `${item.spanishProjectDescription}`;
    }else {
        copy.innerText = `${item.englishProjectDescription}`;
    }

    header.appendChild(title);
    body.appendChild(copy);
    const closeButton = document.createElement("button");
    closeButton.innerText = "x";
    closeButton.addEventListener("click", () => {
        closeCard();
    });
    closeButton.classList.add("card_closeButton");

    card.append(closeButton, cardAside, header, body);
}
export async function showProjectDescription(event, isInInglish){
    projectsData.forEach(item => {
        if(event.target.id === item.name){
            makeCard(item, isInInglish);
            showCard();
        }
    })
}