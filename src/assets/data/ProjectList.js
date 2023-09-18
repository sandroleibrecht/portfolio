import skillList from './SkillList';
const skills = {};
skillList.forEach( skill => { 
  skills[skill.name] = {...skill};
});

const projects = [
  {
    id: 'task-manager',
    name : "Collab Task",
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
    id: 'ghostwriter-js',
    name : "Ghostwriter JS",
    image: '/img/projects/ghostwriter-js-1.png',
    techs : [skills.HTML5, skills.SCSS, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/ghostwriter-js",
    live : "https://main.d2krtq4ptna642.amplifyapp.com/",
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
    spotlight: true
  },
  {
    id: 'equal-checker',
    name : "Equal Checker",
    image: '/img/projects/equal-checker-1.png',
    techs : [skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/equal-checker",
    live : "https://www.npmjs.com/package/equal-checker",
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
    screenshots: ['/img/projects/equal-checker-2.png', '/img/projects/equal-checker-3.png'],
    spotlight: true
  },
  {
    id: 'hmi-data-merge',
    name : "HMI Data Merge",
    image: '/img/projects/hmi-data-merge-1.png',
    techs : [skills.Python],
    github : "https://github.com/sandropernerstorfer/hmi-data-merge",
    live : "",
    route: "/projects/hmi-data-merge",
    desc: {
      en: 
      `This application was developed for a company working in the automation industry, and acted as a development tool.
      Job of this tool was to update and merge giant excel files full of instruments, equipment, sensors and motors with lots of categorized sheets and special cases.
      No manual merging and quick HMI (Human Machine Interface) data import.
      `,

      de: 
      `Diese Anwendung wurde für ein Unternehmen entwickelt, das in der Automatisierungsbranche tätig ist, und diente als Entwicklungswerkzeug.
      Die Aufgabe dieses Tools bestand darin, riesige Excel-Dateien voller Instrumente, Geräte, Sensoren, Motoren usw. zu aktualisieren und zusammenzuführen.
      Mit vielen kategorisierten Excel-Sheets und Sonderfällen.
      Man erspart sich das manuelle Zusammenführen und erzielt einen schnellen HMI-Datenimport (Human Machine Interface).`
    },
    screenshots: ['/img/projects/hmi-data-merge-2.png', '/img/projects/hmi-data-merge-3.png'],
    spotlight: true
  },
  {
    id: 'portfolio',
    name : "Portfolio",
    image: '/img/projects/portfolio-1.png',
    techs : [skills.JavaScript, skills.React, skills.Redux, skills['Styled Components']],
    github : "https://github.com/sandropernerstorfer/portfolio",
    live : "",
    route: "/projects/portfolio",
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
    id: 'clocks-js',
    name : "Clocks JS",
    image: '/img/projects/clocks-js-1.png',
    techs : [skills.HTML5, skills.CSS3, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/clocks-js",
    live : "https://main.d1ep2hyslzqu37.amplifyapp.com/",
    route: "/projects/clocks-js",
    desc: {
      en: 
      `Two clocks, analgog and digital, built with HTML, CSS and JavaScript.`,
      de: 
      `Zwei Uhren, analog und digital, erstellt mit HTML, CSS und JavaScript.`
    },
    screenshots: ['/img/projects/clocks-js-2.png']
  }
];

export default projects;