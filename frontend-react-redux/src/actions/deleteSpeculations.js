export const deleteNote = (graph_id, note_id) => {


    return dispatch => {
        dispatch({type: 'START_DELETE_NOTE_REQUEST'})
        // converting graph_id to integer 
        let graphID = parseInt(graph_id)

        let dispatchData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }

        /// interpolation of graphID and note_id into fetch to delete correct objects
        fetch(`http://localhost:3001/graphs/${graphID}/notes/${note_id}`, dispatchData)
        .then(response=> response.json())
        .then(json => {
            dispatch({type: 'DELETE_NOTE', note_id})
        })


        .catch(function(error) {
            alert("ERROR!")
            console.log(error.message)
        }) 
    }
}


export const deleteQuestion = (graph_id, question_id) => {

    return dispatch => {
        dispatch({type: 'START_DELETE_QUESTION_REQUEST'})
        // converting graph_id to integer 
        let graphID = parseInt(graph_id)

        let dispatchData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }

        /// interpolation of graphID and question_id into fetch to delete correct objects
        fetch(`http://localhost:3001/graphs/${graphID}/questions/${question_id}`, dispatchData)
        .then(response=> response.json())
        .then(json => {
            dispatch({type: 'DELETE_QUESTION', question_id})
        })


        .catch(function(error) {
            alert("ERROR!")
            console.log(error.message)
        }) 
    }

}