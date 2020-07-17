export default function graphsReducer(state= [], action) {

    switch (action.type) {
        // this is where the fetch get request grabs graphs when they are loaded 
        case 'START_ADDING_GRAPHDATA_REQUEST':
            console.log("fetching inner graph")
            return state
        // populate results of request into state.graphs array
        case 'ADD_GRAPHDATA':
            return[...state, action.graph]
            
        // remove graph from array when deleted from dashboard
        case 'DELETE_GRAPH' :
            return state.filter(graph => graph.id !== action.id)
            
        // start of post request to add new graph
        case 'START_ADDING_DATA_SOURCE_REQUEST':
            return state
        // new graph added but not to dashboard until load
        case 'ADDING_DATA_SOURCE':
            return state
            
        default:
            return state
        
    }
}