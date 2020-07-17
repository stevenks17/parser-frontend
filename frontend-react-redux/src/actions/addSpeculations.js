// 2 functions that take in arguments of form data and graph id

export const addNote = (note) => {

    return dispatch => {
        dispatch({type: 'START_ADDING_ADDNOTE_REQUEST'})

        let dispatchData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(note)
        }
        // fetch made to nested url to create relationship with note and the correct graph
        fetch(`http://localhost:3001/graphs/${note.graph_id}/notes`, dispatchData)
        .then(function(response) {
            return response.json()
        })
        .then(note => {
        // may be bad practice and need to be refactored as I am mutating the object to work with reducer
            let changedNote = {
                id: parseInt(note.id),
                content: note.content,
                graph_id: note.graph_id
            }
        // dispatches action and objecgt to reducer to add it to state
        dispatch({type: 'ADD_NOTE', changedNote})
        })

        .catch(function(error) {
            alert("ERROR!")
            console.log(error.message)
        })
    }
}


export function  addQuestion(question) {

    return dispatch => {
        dispatch({ type: 'START_ADDING_ADDQUESTION_REQUEST'})

        let dispatchData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(question)
        }

        fetch(`http://localhost:3001/graphs/${question.graph_id}/questions`, dispatchData)
        .then(function(response) {
            return response.json()
        })
        .then(question => {
            let changedQuestion = {
                id: parseInt(question.id),
                content: question.content,
                graph_id: question.graph_id
            }
            dispatch ({type: 'ADD_QUESTION', changedQuestion})
        })
        .catch(function(error) {
            alert("ERROR!")
            console.log(error.message)
        })
    }
}