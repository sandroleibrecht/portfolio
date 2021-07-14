import task_1 from '../img/projects/task-manager-1.png';
import task_2 from '../img/projects/task-manager-2.png';
import task_3 from '../img/projects/task-manager-3.png';
import task_4 from '../img/projects/task-manager-4.png';
import ghost_1 from '../img/projects/ghostwriter-1.png';
import ghost_2 from '../img/projects/ghostwriter-2.png';
import ghost_3 from '../img/projects/ghostwriter-3.png';
import deep_check_1 from '../img/projects/deep-check-1.png';
import deep_check_2 from '../img/projects/deep-check-2.png';
import user_manager_1 from '../img/projects/user-manager-1.png';
import user_manager_2 from '../img/projects/user-manager-2.png';
import user_manager_3 from '../img/projects/user-manager-3.png';

const projects = [
  {
    id: 'task-manager',
    name : "Collaborative Task Management",
    image: task_1,
    techs : "HTML, SCSS, JavaScript, NodeJS, Express, MongoDB",
    github : "https://github.com/sandropernerstorfer/task-app/tree/main",
    live : "https://sandi-task.herokuapp.com/",
    route: "/projects/task-manager",
    desc: "Task Manager Desc",
    screenshots: [task_2, task_3, task_4]
  },
  {
    id: 'ghostwriter',
    name : "Ghostwriter.js",
    image: ghost_1,
    techs : "HTML, SCSS, JavaScript",
    githubLink : "https://github.com/sandropernerstorfer/ghostwriter-app/tree/master",
    liveLink : "https://ghostwriter-js.netlify.app/",
    route: "/projects/ghostwriter",
    desc: "Ghostwriter Desc",
    screenshots: [ghost_2, ghost_3]
  },
  {
    id: 'deep-check-function',
    name : "Deep-Check Function",
    image: deep_check_1,
    techs : "JavaScript",
    githubLink : "https://github.com/sandropernerstorfer/deep-check-function",
    liveLink : "",
    route: "/projects/deep-check-function",
    desc: 'deep check desc',
    screenshots: [deep_check_2]
  },
  {
    id: 'express-user-manager',
    name : "Express User-Manager",
    image: user_manager_1,
    techs : "NodeJS, ExpressJS",
    githubLink : "https://github.com/sandropernerstorfer/Node-Express-UserManager",
    liveLink : "https://node-express-user-manager.herokuapp.com/",
    route: "/projects/express-user-manager",
    desc: 'user manager desc',
    screenshots: [user_manager_2, user_manager_3]
  }
];

export default projects;