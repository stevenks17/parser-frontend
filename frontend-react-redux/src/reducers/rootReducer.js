// this will allow us to manipulate state across all reducers in a single reducer
import { combineReducers } from 'redux'

// importing reducers I will need
import graphsReducer from './graphsReducer'
import notesReducer from './notesReducer'
import questionsReducer from './questionsReducer'

// built out reducer and stored it in variable rootReducer
const rootReducer = combineReducers({
    graphs: graphsReducer,
    notes: notesReducer,
    questions: questionsReducer
})

// export for use
export default rootReducer