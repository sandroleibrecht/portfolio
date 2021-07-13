import projects from '../assets/data/ProjectList';

const initialState = { projectList: projects };
const ProjectsReducer = ( state = initialState, action ) => {
  switch( action.type ){
    default:
      return { ...state };
  }
};

export default ProjectsReducer;