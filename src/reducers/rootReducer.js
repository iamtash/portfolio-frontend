import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import projectsReducer from './projectsReducer'

const rootReducer = combineReducers({
  currentUser: loginReducer,
  projects: projectsReducer
})

export default rootReducer