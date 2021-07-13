const projects = [
  {
    id: 'task-manager',
    name : "Collaborative Task Management",
    image: '',
    techs : "HTML, SCSS, JavaScript, NodeJS, Express, MongoDB",
    github : "https://github.com/sandropernerstorfer/task-app/tree/main",
    live : "https://sandi-task.herokuapp.com/",
    details: {
      route: "/projects/task-manager",
      desc: "Task Manager Desc",
      screenshots: [],
    }
  },
  {
    id: 'ghostwriter',
    name : "Ghostwriter.js",
    image: '',
    techs : "HTML, SCSS, JavaScript",
    githubLink : "https://github.com/sandropernerstorfer/ghostwriter-app/tree/master",
    liveLink : "https://ghostwriter-js.netlify.app/",
    details: {
      route: "/projects/ghostwriter",
      desc: "Ghostwriter Desc",
      screenshots: []
    }
  },
  {
    id: 'deep-check-function',
    name : "Deep-Check Function",
    image: '',
    techs : "JavaScript",
    githubLink : "https://github.com/sandropernerstorfer/deep-check-function",
    liveLink : "",
    details: {
      route: "/projects/deep-check-function",
      desc: 'deep check desc',
      screenshots: []
    }
  },
  {
    id: 'express-user-manager',
    name : "Express User-Manager",
    image: '',
    techs : "NodeJS, ExpressJS",
    githubLink : "https://github.com/sandropernerstorfer/Node-Express-UserManager",
    liveLink : "https://node-express-user-manager.herokuapp.com/",
    details: {
      route: "/projects/express-user-manager",
      desc: 'user manager desc',
      screenshots: []
    }
  }
];

export default projects;