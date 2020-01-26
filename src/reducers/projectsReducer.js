export default function projectsReducer(
    state = {
        projects: [],
        requesting: false
    }, action) {
        switch (action.type) {
            case 'REQUESTING_PROJECTS':
                return {
                    ...state,
                    projects: [...state.projects],
                    requesting: true
                  }
            case 'GET_PROJECTS':
                return {
                    ...state,
                    projects: action.projects,
                    requesting: false
                }
            case 'ADD_PROJECT':
                console.log('we hit the reducer!!!!!')
                return {
                    ...state,
                    projects: [...state.projects, action.project],
                    requesting: state.requesting
                }
            case 'LIKE_PROJECT':
                return {
                    ...state,
                    requesting: false,
                    projects: state.projects.map(project => {
                        if (project.id === action.project.id) {
                            return {
                                ...project,
                                likes: action.project.likes
                            }
                        } else return project
                    })
                }
            case 'DELETE_PROJECT':
                return {
                    ...state,
                    requesting: state.requesting,
                    projects: state.projects.filter(project => {
                        return project.id !== action.id
                    })
                }
            case 'EDIT_PROJECT':
                return {
                    ...state,
                    requesting: state.requesting,
                    projects: state.projects.map(project => {
                        if (project.id === action.project.id) {
                            return {
                                ...project,
                                ...action.project
                            }
                        } else return project
                    })
                }
            default:
                return state
        }
    }