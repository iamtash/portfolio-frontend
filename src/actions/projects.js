import axios from 'axios'
import humps from 'humps'

const url = "http://localhost:3001/projects"

export const getProjects = () => {
    return dispatch => {
        dispatch({type: 'REQUESTING_PROJECTS'})
        axios.get(url)
            .then(resp => {
                console.log(resp)
                const projects = resp.data.map(project => humps.camelizeKeys(project))
                console.log(projects)
                dispatch({
                    type: 'GET_PROJECTS',
                    projects
                })
            })
            .catch(error => console.log('get projects error', error))
    }
}

export const addProject = newProject => {
    const project = humps.decamelizeKeys(newProject)
    return dispatch => {
        // dispatch({type: 'REQUESTING_PROJECTS'})
        axios.post(url, { project })
            .then(resp => {
                console.log(resp)
                debugger
            })
            .catch(error => console.log('project posting error', error))
    }
}
