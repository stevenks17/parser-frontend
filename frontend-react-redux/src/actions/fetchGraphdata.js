// url passed as arg to fetch selected graph in dropdown
export function fetchGraphData(url) {

    return (dispatch) => {
        dispatch({type: 'START_ADDING_GRAPHDATA_REQUEST'})
        fetch(url)

        .then(response => response.json())
        .then(data => {
            console.log(data)
            let graph = {
                id: parseInt(data.id),
                name: data.name,
                info_url: data.info_url,
                screenshot_url: data.screenshot_url,
                
            }
            dispatch({ type: 'ADD_GRAPHDATA', graph })

        })
        
    }
}

// url pairs note with correct graph
export function fetchNotes(url) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_NOTES_REQUEST'})
        fetch(`${url}/notes`)
        .then(response => response.json())
        .then(notes => dispatch ({ type: 'FETCH_NOTES', notes}))
    }
}

// url pairs questions with correct graph for fetch request
export function fetchQuestions(url) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_QUESTIONS_REQUEST'})
        fetch(`${url}/questions`)
        .then(response => response.json())
        .then(questions => dispatch ({ type: 'FETCH_QUESTIONS', questions}))
    }
}