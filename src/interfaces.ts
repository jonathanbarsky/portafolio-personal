interface Nav {
  readonly about: string,
  readonly language: string,
  readonly projects: string,
  readonly cv: string,
  readonly skills: string,
  readonly contact: string
}
interface Profile {
  readonly greeting: string,
  readonly name: string,
  readonly rol: string,
  readonly description: string
}
interface Projects {
  readonly title: string,
  readonly projectButton: string,
  readonly projectsButtonDetails: string
}
interface SkillSet {
  readonly title: string,
  readonly subTitle1: string,
  readonly subTitle2: string,
  readonly interested: string
}
interface Contact {
  readonly title: string,
  readonly callToAction: string
}

export interface Language {
  nav: {
    about: string,
    language: string,
    projects: string,
    cv: string,
    skills: string,
    contact: string
  },
  profile: {
    greeting: string,
    name: string,
    rol: string,
    description: string
  },
  projects: {
    title: string,
    projectButton: string,
    projectsButtonDetails: string
  },
  skillSet: {
      title: string,
      subTitle1: string,
      subTitle2: string,
      interested: string
  },
  contact: {
      title: string,
      callToAction: string
  }
}
export interface Project {
  readonly name: string;
  readonly imgMobile: string;
  readonly imgTablet: string;
  readonly imgDesktop: string;
  readonly spanishProjectDescription: string;
  readonly englishProjectDescription: string;
}
