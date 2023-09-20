import { Language } from "./interfaces";

const spanish: Language = {
    "nav":{
        "about": "Sobre mi",
        "language": "Idioma",
        "projects": "Proyectos",
        "cv": "Mi CV",
        "skills": "Habilidades",
        "contact": "Contacto"
    },
    "profile": {
        "greeting": "Hola!",
        "name": "Soy Jonathan Barsky",
        "rol": "Frontend Developer",
        "description": `Desarrollador Frontend con sólidos conocimientos de HTML, CSS, Javacript para el desarrollo de páginas web con Responsive Design.

        Mi experiencia desarrollando en el ecosistema de React incluye a react router dom V6, react Hooks, estados de React y además brindarle una mejor legibilidad al código implementando las react props junto con la composición de componentes.

        Tengo experiencia: desarrollando proyectos de tipo Single Page App(SPA), Multi Page App(MPA), persistencia de datos, utilizar el preprocesador SASS para los estilos, consumo de APIs REST para hacer páginas dinámicas, implementar esqueletos de carga con el fin de mejorar la UX y realizar animaciones con CSS puro.

        Soy de argentina y por ahora mi nivel de inglés es A2.

    Me apasiona el aprendizaje continuo en tecnologías y habilidades que me permitan mejorar la productividad.

    Actualmente soy estudiante en platzi y trabajo para especializarme en el stack de tecnologías PERNN.`
    },
    "projects": {
        "title": "Proyectos",
        "projectButton": "Proyecto",
        "projectsButtonDetails": "Detalles"
    },
    "skillSet": {
        "title": "Habilidades",
        "subTitle1": "Tecnologías",
        "subTitle2": "Otros marcos de trabajo y herramientas que utilizo.",
        "interested": "Interesado en aprender."
    },
    "contact": {
        "title": "Contacto",
        "callToAction": "Si este portafolio te gustó, contáctame y hablemos."
    },
}
const english: Language = {
    "nav":{
        "about": "About me",
        "language": "Language",
        "projects": "Projects",
        "cv": "My CV",
        "skills": "Skill set",
        "contact": "Contact"
    },
    "profile": {
        "greeting": "Hey!",
        "name": "I'm Jonathan Barsky",
        "rol": "Frontend Developer",
        "description": `Frontend developer with solid knowledge of HTML, CSS, Javascript for the development of web pages with Responsive Design.

        My experience developing in the React ecosystem includes react router dom V6, react Hooks, React states and also giving you better code readability by implementing react props along with component composition.

        I have experience: developing Single Page App(SPA), Multi Page App(MPA) type projects, data persistence, using the SASS preprocessor for styles, consuming REST APIs to make dynamic pages, implementing loading skeletons in order to improve the UX and make animations with pure CSS.

        I am from Argentina and for now my level of English is A2.

    I am passionate about continuous learning in technologies and skills that allow me to improve productivity.

    I am currently a student at platzi and I am working to specialize in the PERNN technology stack.`
    },
    "projects": {
        "title": "Projects",
        "projectButton": "Project",
        "projectsButtonDetails": "Details"
    },
    "skillSet": {
        "title": "Skill set",
        "subTitle1": "Technologies.",
        "subTitle2": "Other frameworks and tools I use.",
        "interested": "interested in learning."
    },
    "contact": {
        "title": "Contact",
        "callToAction": "If you liked this portfolio, contact me and let's talk."
    }
}

export { spanish, english };
