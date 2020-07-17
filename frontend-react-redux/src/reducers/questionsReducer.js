export default function questionsReducer(state = [], action) {
    switch(action.type) {
    // fetch request to grab questions when graphs loaded  to dashboard
    case 'START_FETCH_QUESTIONS_REQUEST':
        return state
    // add results to array
    case 'FETCH_QUESTIONS':
        return[...state, ...action.questions]


    // add question to database
    case 'START_ADDING_ADDQUESTION_REQUEST':
        return state
        // add new question to state.questions
    case 'ADD_QUESTION':
        return [...state, action.changedQuestion]
    


    // delete request from database
    case 'START_DELETE_QUESTION_REQUEST':
        return state
    // go through state.questions check for deleted questions so they arent re-rendered
    case 'DELETE_QUESTION':
        let remainingQuestions = state.map(question  => {
            if (question.id === action.question_id) {
                return action.question_id
            } else {
                return question
            }
            
        })
        return remainingQuestions


        default:
            return state
    }
}