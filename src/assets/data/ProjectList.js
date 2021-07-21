import skillList from './SkillList';
const skills = {};
skillList.forEach( skill => { 
  skills[skill.name] = {...skill};
});

const projects = [
  {
    id: 'task-manager',
    name : "Collaborative Task Management",
    image: '/img/projects/task-manager-1.png',
    techs : [skills.HTML5, skills.SCSS, skills.JavaScript, skills.NodeJS, skills.ExpressJS, skills.MongoDB, skills.SocketIO],
    github : "https://github.com/sandropernerstorfer/task-app/tree/main",
    live : "https://sandi-task.herokuapp.com/",
    route: "/projects/task-manager",
    desc: {
      en: 
      `This Collaborative Task Management Full Stack Application covers many useful features in the realm of managing tasks and working together, 
      such as: Login/SignUp, Session Management, Profile customization, Customizable Desk & Task creation, Drag & Drop, Live Team-Chat, Websockets, 
      and assigning Members to Tasks. Project-, Code- Documentation and general App information can be found in the DOCS Folder on Github.`,

      de: `Diese Collaborative Task Management Full Stack Anwendung deckt viele nützliche Funktionen im Bereich der Aufgabenverwaltung und Zusammenarbeit ab.
      Wie zum Beispiel: Login/SignUp, Session Management, Profilanpassung, Anpassbare Desk- und Aufgabenerstellung, Drag & Drop, Live Team-Chat, Websockets,
      und das Zuweisen von Mitgliedern zu Aufgaben. Projekt-, Code-Dokumentation und allgemeine App-Informationen befinden sich im DOCS-Ordner auf Github.`
    },
    screenshots: ['/img/projects/task-manager-2.png', '/img/projects/task-manager-3.png', '/img/projects/task-manager-4.png'],
    spotlight: true
  },
  {
    id: 'ghostwriter',
    name : "Ghostwriter.js",
    image: '/img/projects/ghostwriter-1.png',
    techs : [skills.HTML5, skills.SCSS, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/ghostwriter-app/tree/master",
    live : "https://ghostwriter-js.netlify.app/",
    route: "/projects/ghostwriter",
    desc: {
      en: 
      `Ghostwriter is a small & fun Frontend Tool that will take two user inputs : 
      Text and Milliseconds. In the Preview Window you will then see your text being 
      displayed letter after letter for the wanted duration. 
      Below you can copy the already generated code with one click to use wherever you want.`,

      de: 
      `Ghostwriter ist ein kleines Frontend Tool welches zwei Inputs annimmt: 
      Text und Millisekunden. Im Vorschaufenster wird dann der Text 
      Buchstabe für Buchstabe für die gewünschte Dauer angezeigt. 
      Unten kann der bereits generierte Code mit einem Klick kopiert und verwendet werden.`
    },
    screenshots: ['/img/projects/ghostwriter-2.png', '/img/projects/ghostwriter-3.png'],
    spotlight: true
  },
  {
    id: 'equal-checker-npm',
    name : "NPM Package: equal-checker",
    image: '/img/projects/equal-checker-1.png',
    techs : [skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/equal-checker-npm",
    live : "https://www.npmjs.com/package/equal-checker",
    route: "/projects/equal-checker-npm",
    desc: {
      en: 
      `A small and useful NPM Package written in JavaScript. Checks if two values are equal. 
      Works on single Values, Arrays, Objects. 
      Uses Recursion to also check any combination and level of Nesting. 
      Optional Type-Checking, and optional returning of Error Messages.`,

      de: 
      `Ein kleines und nützliches NPM Package geschrieben in JavaScript. Überprüft ob zwei Werte identisch sind. 
      Funktioniert mit einzelnen Werten, Arrays, und Objekten. 
      Benutzt Rekursion um jede Art und Tiefe von Verschachtelungen zu überprüfen. 
      Optionales Type-Checking, und optionale rückgabe von Fehler Meldungen.`
    },
    screenshots: ['/img/projects/equal-checker-2.png', '/img/projects/equal-checker-3.png'],
    spotlight: true
  },
  {
    id: 'react-portfolio',
    name : "React Portfolio",
    image: '/img/projects/portfolio-1.png',
    techs : [skills.JavaScript, skills.React, skills.Redux, skills['Styled Components']],
    github : "https://github.com/sandropernerstorfer/sandro-react-portfolio",
    live : "",
    route: "/projects/react-portfolio",
    desc: {
      en: 
      `My Portfolio Page built with React, Styled Components, Redux 
      and other useful packages such as framer-motion, react-router-dom and emailjs, 
      creating a cool overview of me and my projects, and a contact page. Looking forward to read you message !`,

      de: 
      `Meine Portfolio Seite, erstellt mit React, Styled Components, 
      Redux und anderen nützliche Tools wie framer-motion, react-router-dom und emailjs, 
      um einen Überblick von mir und meiner Arbeit zu schaffen. Ich freue mich über jede Nachricht !`
    },
    screenshots: ['/img/projects/portfolio-2.png'],
    spotlight: true
  },
  {
    id: 'express-user-manager',
    name : "Express User-Manager",
    image: '/img/projects/user-manager-1.png',
    techs : [skills.NodeJS, skills.ExpressJS],
    github : "https://github.com/sandropernerstorfer/Node-Express-UserManager",
    live : "https://node-express-user-manager.herokuapp.com/",
    route: "/projects/express-user-manager",
    desc: {
      en: 
      `A small local User-Managment-Tool built with NodeJS and ExpressJS. 
      Add new users, edit user information, delete users and sort them in the list.`,
      de: 
      `Ein kleines User-Management-Tool erstellt mit NodeJS und ExpressJS. 
      Füge neue User hinzu, bearbeite User Daten, lösche User und sortiere sie in der Liste.`
    },
    screenshots: ['/img/projects/user-manager-2.png', '/img/projects/user-manager-3.png']
  },
  {
    id: 'js-clocks',
    name : "JS Clocks",
    image: '/img/projects/js-clocks-1.png',
    techs : [skills.HTML5, skills.CSS3, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/JS-Clocks",
    live : "https://js-clocks.netlify.app/",
    route: "/projects/js-clocks",
    desc: {
      en: 
      `Fun little project containing two clocks, analgog and digital, built with HTML, CSS and JavaScript.`,
      de: 
      `Lustiges kleines Projekt mit zwei Uhren, analog und digital, erstellt mit HTML, CSS und JavaScript.`
    },
    screenshots: ['/img/projects/js-clocks-2.png']
  }
];

export default projects;