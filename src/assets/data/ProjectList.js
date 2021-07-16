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
    desc: "Task Manager Desc",
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
    desc: "Ghostwriter Desc",
    screenshots: ['/img/projects/ghostwriter-2.png', '/img/projects/ghostwriter-3.png'],
    spotlight: true
  },
  {
    id: 'deep-check-function',
    name : "Deep-Check Function",
    image: '/img/projects/deep-check-1.png',
    techs : [skills.JavaScript],
    github : "https://github.com/sandropernerstorfer/deep-check-function",
    live : "",
    route: "/projects/deep-check-function",
    desc: 'deep check desc',
    screenshots: ['/img/projects/deep-check-2.png'],
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
    desc: 'portfolio desc',
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
    desc: 'user manager desc',
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
    desc: 'js clocks desc',
    screenshots: ['/img/projects/js-clocks-2.png']
  }
];

export default projects;