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
                return {
                    ...state,
                    projects: [...state.projects, action.project],
                    requesting: false
                }
            default:
                return state
        }
    }