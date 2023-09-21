const projectsData = [
    {
        name: "Batatabit",
        imgMobile: "./src/images/slides/jonathanbarsky.github.io_Batatabit_proyecto_(iPhone 6_7_8 Plus).png",
        imgTablet: "./src/images/slides/jonathanbarsky.github.io_Batatabit_proyecto_(iPad).png",
        imgDesktop: "./src/images/slides/jonathanbarsky.github.io_Batatabit_proyecto_(Nest Hub Max).png",
        spanishProjectDescription: `Batatabit es una Single Page App cuya UI fue diseñada en figma, sobre lo que me base para realizar esta pagina.
        Lo desarrolle con la metodologia de responsive design: mobile first hasta pantallas desktop y  la metodologia de nomenclatura BEM.

        Las secciones iran apareciendo dinamicamente a medida que navegues por la pagina.

        Para desarrollarlo utilice: HTML5, CSS3(flexbox), javascript(intersection observer) y animaciones con CSS puro.`,
        englishProjectDescription: `Batatabit is a Single Page App whose UI was designed in figma, on which I base myself to make this page.

        I developed it with the responsive design methodology: mobile first to desktop screens and the BEM naming methodology.

        The sections will appear dynamically as you navigate through the page.

        To develop it use: HTML5, CSS3(flexbox), javascript(intersection observer) and animations with pure CSS.`
    },
    {
        name: "The Movie DB API",
        imgMobile: "./src/images/slides/jonathanbarsky.github.io_the-movieDB-api_(Nexus 6P).png",
        imgTablet: "./src/images//slides/jonathanbarsky.github.io_the-movieDB-api_(iPad).png",
        imgDesktop: "./src/images/slides/jonathanbarsky.github.io_the-movieDB-api_(Nest Hub Max).png",
        spanishProjectDescription: `The Movie DB es una Multi Page App que muestra catálogos de películas separadas por categorías, también cuenta con la característica de tener un buscador en que podrás buscar la película que desees, esto gracias al consumo de la API de The Movie DB.

        Los pósteres y secciones de la página irán apareciendo dinámicamente a medida que navegues.

        La UI y los estilos los desarrollé con responsive design, mobile first hasta pantallas desktop.

        Para el desarrollo utilicé: HTML5, CSS3(grid, flexbox y nomenclatura BEM), javascript(consumo de API REST, manipulación del DOM , intersection observer, localstorage, lazy load de las imagenes, navegación con hash) y animaciones con CSS puro.`,
        englishProjectDescription: `The movie DB is a Multi Page App that shows catalogs of movies separated by categories, it also has the feature of having a search engine where you can search for the movie you want, thanks to the consumption of The Movie DB API.

        The posters and sections of the page will appear dynamically as you navigate.

        The UI and the styles were developed with responsive design, mobile first up to desktop screens.

        For the development I used: HTML5, CSS3 (grid, flexbox and BEM nomenclature), javascript (REST API consumption, DOM manipulation, intersection observer, localstorage, lazy load of images, navigation with hash) and animations with pure CSS.`
    },
    {
        name: "To-Do App",
        imgMobile: "./src/images/slides/jonathanbarsky.github.io_Todo-App_(Nexus 6P).png",
        imgTablet: "./src/images/slides/jonathanbarsky.github.io_Todo-App_(iPad).png",
        imgDesktop: "./src/images/slides/jonathanbarsky.github.io_Todo-App_(Nest Hub).png",
        spanishProjectDescription: `ToDo App es una aplicaion desarrollada en React para crear listas de tareas, estas tareas se pueden crear, completar y eliminar, ademas tienen persistencia de datos, o sea que si recargas la pagina estas tareas seguiran estando.

        Para realizar este proyecto utilice: React Hooks, React States, composicion de componentes, esqueletos de carga y local storage.`,
        englishProjectDescription: `ToDo App is an application developed in React to create task lists, these tasks can be created, completed and deleted, they also have data persistence, that is, if you reload the page these tasks will still be there.

        To carry out this project use: React Hooks, React States, component composition, loading skeletons and local storage.`
    },
    {
        name: "Space Tourism Website",
        imgMobile: "./src/images/slides/space-tourism-website-jonathan-barsky.netlify.app_(Moto G4).png",
        imgTablet: "./src/images/slides/space-tourism-website-jonathan-barsky.netlify.app_(iPad).png",
        imgDesktop: "./src/images/slides/space-tourism-website-jonathan-barsky.netlify.app_(Nest Hub Max).png",
        spanishProjectDescription: `Space tourism website es un reto de la pagina de Frontend Mentor cuyo diseño fue realizado en figma, en el que me basé para realizar la UI de esta proyecto.

        Esta app la desarrolle en React, muestra las descripciones de distintos planetas, los vehiculos espaciales involucrados y de la tripulacion , .

        Implemente esqueletos de carga para simular la espera al cargar la informacion, esta app esta desarrollada pensando en responsive design con mobile first a pantallas desktop.

        De React implemente: componentes tanto con la sintaxis de clases como de funciones, react router dom V6 para la navegacion.

        Para desarrollarlo utilice: git y github para el versionado, npm instalar para las dependencias, realice la configuracion del empaquetador webpack para que trabaje con react y utilice el sistema de nomenclatura BEM para los estilos`,
        englishProjectDescription: `Space tourism website is a challenge from the Frontend Mentor page whose design was made in figma, on which I based myself to make the UI of this project.

        This app was developed in React, it shows the descriptions of different planets, the space vehicles involved and the crew.

        Implement loading skeletons to simulate the wait when loading the information, this app is developed with responsive design in mind with mobile first for desktop screens.

        From React implement: components with both class and function syntax, react router dom V6 for navigation.

        To develop it use: git and github for versioning, npm install for dependencies, configure the webpack wrapper to work with react and use the BEM naming system for styles`
    },
    {
        name: "Lego Super Heroes",
        imgMobile: "./src/images/slides/jonathanbarsky.github.io_lego-super-heroes_(iPhone 6_7_8 Plus).png",
        imgTablet: "./src/images/slides/jonathanbarsky.github.io_lego-super-heroes_(iPad).png",
        imgDesktop: "./src/images/slides/jonathanbarsky.github.io_lego-super-heroes_(Nest Hub).png",
        spanishProjectDescription: `Lego Super Heroes es una Single Page App(SPA) que básicamente muestra personajes héroes animados de los elementos de la página.

        Cuenta con un carrusel animado que se muestra como modal al clickear a los personajes de la sección inferior de la página, este carrusel tiene un efecto en 3D al mostrar los distintos personajes que tiene.

        Se desarrolló primeramente para pantallas desktop y después aplique responsive design haciendo que se pueda visualizar también en dispositivos móviles.

        Lo desarrollé con: HTML5, CSS, la metodología BEM, animaciones con CSS puro y Javascript para que los elemente se muestren al hacer scroll en dispositivos móviles.`,
        englishProjectDescription: `Lego Super Heroes is a Single Page App(SPA) that basically displays animated hero characters of page elements.

        It has an animated carousel that is displayed as a modal when clicking on the characters in the lower section of the page, this carousel has a 3D effect by showing the different characters it has.

        It was first developed for desktop screens and then applied responsive design making it also viewable on mobile devices.

        I developed it with: HTML5, CSS, the BEM methodology, animations with pure CSS and Javascript so that the elements are displayed when scrolling on mobile devices.`
    }
];
export { projectsData };
