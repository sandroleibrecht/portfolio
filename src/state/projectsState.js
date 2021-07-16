import projects from '../assets/data/ProjectList';

// Action Creator
export const setScrollPosition = scrollY => {
  return{
    type: 'SET_SCROLL',
    payload: { scrollY }
  };
};

const initialState = { projectList: projects, scrollPosition: 0 };
const ProjectsReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case 'SET_SCROLL':
      return { ...state,  scrollPosition: action.payload.scrollY };
    default:
      return { ...state };
  }
};

export default ProjectsReducer;