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
    id: 'ghostwriter',
    name : "Ghostwriter JS",
    image: '/img/projects/ghostwriter-1.png',
    techs : [skills.HTML5, skills.SCSS, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/ghostwriter-js",
    live : "https://main.d2krtq4ptna642.amplifyapp.com/",
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
    name : "Equal Checker",
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
    id: 'python-excel-script',
    name : "HMI Data Merge",
    image: '/img/projects/python-excel-1.png',
    techs : [skills.Python],
    github : "https://github.com/sandropernerstorfer/hmi-data-merge",
    live : "",
    route: "/projects/python-excel-script",
    desc: {
      en: 
      `This Script got created for a company to automate a special kind of excel task. 
      It will take the Master Instrument Excel File, and filter the data based on the user input: P&ID and Typicals. 
      For each given Typical the data will be processed and saved controlled by the corresponding Typical Filter Logic. 
      Output will then be stored on the desktop as new Excel File with one new Sheet for each filtered typical.`,

      de: 
      `Dieses Script wurde für eine Firma entwickelt um eine spezielle Excel Arbeit zu automatisieren.
      Es lädt zuerst die Master Instrument Excel Datei und filtert dann den Inhalt je nach User Input: P&ID und Typicals.
      Die Daten werden für jedes angegebene Typical auf eine eigene art gefiltert und bearbeitet, je nach Typical Filter Logik.
      Der Output wird dann in Form von einer neuen Excel Datei am Desktop gespeichert.`
    },
    screenshots: ['/img/projects/python-excel-2.png', '/img/projects/python-excel-3.png'],
    spotlight: true
  },
  {
    id: 'react-portfolio',
    name : "Portfolio",
    image: '/img/projects/portfolio-1.png',
    techs : [skills.JavaScript, skills.React, skills.Redux, skills['Styled Components']],
    github : "https://github.com/sandropernerstorfer/personal-portfolio",
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
    id: 'js-clocks',
    name : "Clocks JS",
    image: '/img/projects/js-clocks-1.png',
    techs : [skills.HTML5, skills.CSS3, skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/clocks-js",
    live : "https://main.d1ep2hyslzqu37.amplifyapp.com/",
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