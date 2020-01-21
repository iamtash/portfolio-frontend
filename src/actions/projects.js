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
        axios.post(url, { project })
            .then(resp => {
                console.log(resp)
                dispatch({
                    type: 'ADD_PROJECT',
                    project: humps.camelizeKeys(resp.data)
                })
            })
            .catch(error => console.log('project posting error', error))
    }
}

export const likeProject = id => {
    return dispatch => {
        axios.patch(`${url}/${id}`, { like: true })
            .then(resp => {
                console.log(resp)
                const { id, likes } = resp.data
                dispatch({
                    type: 'LIKE_PROJECT',
                    project: { id, likes }
                })
            })
            .catch(error => console.log('project liking error', error))
    }
}

export const deleteProject = id => {
    return dispatch => {
        axios.delete(`${url}/${id}`)
            .then(resp => {
                console.log(resp)
                dispatch({
                    type: 'DELETE_PROJECT',
                    id: resp.data.id
                })
            })
            .catch(error => console.log('project deleting error', error))
    }
}

export const editProject = editedProject => {
    const { id, title, githubUrl, demoUrl, description } = editedProject
    const project = humps.decamelizeKeys({ title, githubUrl, demoUrl, description })
    return dispatch => {
        axios.patch(`${url}/${id}`, { project })
            .then(resp => {
                console.log(resp)
                dispatch({
                    type: 'EDIT_PROJECT',
                    project: humps.camelizeKeys(resp.data)
                })
            })
            .catch(error => console.log('project editing error', error))
    }
}