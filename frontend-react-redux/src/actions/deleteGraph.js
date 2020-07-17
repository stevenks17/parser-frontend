// this will remove graph from state 
// it will still be in database but will be gone when dashboard is cleared
export const deleteGraph = (graph) => {
    return {
        type: 'DELETE_GRAPH',
        id: graph.id
    }
}