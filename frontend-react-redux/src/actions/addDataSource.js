// takes in argument of an object with form data(name and urls)

export const addDataSource = (dataSource) => {

    return dispatch => {
        dispatch({ type: 'START_ADDING_DATA_SOURCE_REQUEST' })
        
        let dispatchData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dataSource)
        };

        fetch(`http://localhost:3001/graphs`, dispatchData)
        .then(function(response) {
            return response.json()
        })
        // dispatches action.type and data object to graphs reducer after recieving json response from front end
        .then(data => {
        console.log(data)
            dispatch({ type: 'ADD_DATA_SOURCE', data })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}
