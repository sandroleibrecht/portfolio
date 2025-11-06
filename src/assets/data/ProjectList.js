import skillList from './SkillList';

const skills = {};
skillList.forEach( skill => skills[skill.id] = {...skill} );

const projects = [
  {
    id: 'collab-task',
    name : "Collab Task",
    image: '/img/projects/collab-task-1.png',
    techs : [skills.html5, skills.scss, skills.javaScript, skills.expressJs, skills.mongoDb, skills.socketIo],
    github : "https://github.com/sandroleibrecht/collab-task",
    live : "",
    route: "/projects/collab-task",
    desc: {
      en: 
      `This collaborative task-management application covers many useful features in the realm of managing tasks and working together. 
      For example: account creation, session management, profile customization, customizable desk & task creation, drag & drop, live team chat, 
      and assigning members to tasks. Technical documentation and general app information can be found in the DOCS folder on GitHub.`,

      de: `Diese kollaborative Taskmanagement Anwendung deckt viele nützliche Funktionen im Bereich der Aufgabenverwaltung und Zusammenarbeit ab.
      Zum Beispiel: Erstellung eines Accounts, Session Management, Profilanpassung, Anpassbare Desk- und Aufgabenerstellung, Drag & Drop, Live Teamchat,
      und das Zuweisen von Mitgliedern für spezielle Aufgaben. Projekt-, Code-Dokumentation und allgemeine App-Informationen befinden sich im DOCS Ordner auf GitHub.`
    },
    screenshots: ['/img/projects/collab-task-2.png', '/img/projects/collab-task-3.png', '/img/projects/collab-task-4.png'],
    spotlight: true
  },
  {
    id: 'hmi-data-merge',
    name : "HMI Data Merge",
    image: '/img/projects/hmi-data-merge-1.png',
    techs : [skills.python],
    github : "https://github.com/sandroleibrecht/hmi-data-merge",
    live : "",
    route: "/projects/hmi-data-merge",
    desc: {
      en: 
      `This application finds its use as a development tool in the automation industry.
      Job of this tool is to update and merge giant excel files full of specifications (instrument, equipment, sensors, motors,...) including categorized sheets and special cases.
      No manual merging and quick HMI data import.
      `,

      de: 
      `Diese Anwendung findet ihren Nutzen als Entwicklungswerkzeug in der Automatisierungsbranche.
      Die Aufgabe dieses Tools ist es, riesige Excel-Dateien befüllt mit Daten rund um Instrumente, Geräte, Sensoren und Motoren zu aktualisieren und zusammenzuführen.
      Man erspart sich das manuelle Zusammenführen und erzielt einen schnellen HMI-Datenimport.`
    },
    screenshots: ['/img/projects/hmi-data-merge-2.png', '/img/projects/hmi-data-merge-3.png'],
    spotlight: true
  },
  {
    id: 'equal-checker',
    name : "Equal Checker",
    image: '/img/projects/equal-checker-1.png',
    techs : [skills.javaScript],
    github : "https://github.com/sandroleibrecht/equal-checker",
    live : "",
    route: "/projects/equal-checker",
    desc: {
      en: 
      `Lightweight npm-package written in JavaScript.
      Checks if two objects, arrays or standalone values are equal. 
      Utilizes recursion to check any combination and level of nesting. 
      Optional type checking, and optional returning of error messages.`,

      de: 
      `Nützliches npm-package, geschrieben in JavaScript.
      Überprüft ob zwei Objekte, Arrays oder einzelne Werte identisch sind.
      Der rekursive Aufruf kümmert sich um jegliche Art und Tiefe von Verschachtelungen. 
      Optionales Type-Checking, und optionale Fehlermeldungen.`
    },
    screenshots: ['/img/projects/equal-checker-2.png', '/img/projects/equal-checker-3.png'],
    spotlight: true
  },
  {
    id: 'portfolio',
    name : "Portfolio",
    image: '/img/projects/portfolio-1.png',
    techs : [skills.react, skills.redux, skills.styledComponents],
    github : "https://github.com/sandroleibrecht/portfolio",
    live : "",
    route: "/projects/portfolio",
    desc: {
      en: 
      `Inception? You're using this one right now, and I hope you enjoy the experience!
      Tools like React, Styled Components, Redux and other useful things such as framer-motion, react-router-dom and aws-services,
      created this overview of my projects and myself. Im looking forward to hearing from you, so feel free to check out the contact page.`,

      de: 
      `Inception? Du verwendest dieses Projekt in diesem Moment, und ich hoffe es gefällt dir!
      Durch Tools wie React, Styled Components, Redux und andere nützliche Dinge wie framer-motion, react-router-dom und aws-services, 
      entstand dieser Überblick von meinen Projekten und meiner Wenigkeit. Schau beim Kontaktformular vorbei, ich freue mich über deine Nachricht. `
    },
    screenshots: ['/img/projects/portfolio-2.png'],
    spotlight: true
  },
  {
    id: 'ghostwriter-js',
    name : "Ghostwriter JS",
    image: '/img/projects/ghostwriter-js-1.png',
    techs : [skills.html5, skills.scss, skills.javaScript],
    github : "https://github.com/sandroleibrecht/ghostwriter-js",
    live : "",
    route: "/projects/ghostwriter-js",
    desc: {
      en: 
      `Generate code to animate your text.
      Just enter the following two inputs: text and duration.
      Inside the preview box, the given text will then be displayed letter after letter.
      The duration input controls the typing tempo.
      Copy the generated code with one click and use it wherever you want!`,

      de: 
      `Generiert Code der deinen Text animiert.
      Gib einfach folgende zwei Werte an: Text und Dauer.
      Im Vorschaufenster wird dann der Text Buchstabe für Buchstabe erscheinen.
      Die Dauer kontrolliert das Tipp-Tempo. 
      Der bereits generierte Code kann mit einem Klick kopiert und verwendet werden.`
    },
    screenshots: ['/img/projects/ghostwriter-js-2.png', '/img/projects/ghostwriter-js-3.png'],
    spotlight: false
  },
  {
    id: 'clocks-js',
    name : "Clocks JS",
    image: '/img/projects/clocks-js-1.png',
    techs : [skills.html5, skills.css3, skills.javaScript],
    github : "https://github.com/sandroleibrecht/clocks-js",
    live : "",
    route: "/projects/clocks-js",
    desc: {
      en: 
      `Two clocks, analgog and digital, built with HTML, CSS and JavaScript.`,
      de: 
      `Zwei Uhren, analog und digital, erstellt mit HTML, CSS und JavaScript.`
    },
    screenshots: ['/img/projects/clocks-js-2.png'],
    spotlight: false
  }
];

export default projects;
