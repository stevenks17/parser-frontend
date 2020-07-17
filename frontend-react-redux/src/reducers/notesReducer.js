export default function notesReducer(state = [], action) {
    switch(action.type) {
    // fetch request to grab notes when graphs loaded  to dashboard
    case 'START_FETCH_NOTES_REQUEST':
        return state
    // add results to array
    case 'FETCH_NOTES':
        return[...state, ...action.notes]


    // add note to database
    case 'START_ADDING_ADDNOTE_REQUEST':
        return state
        // add new note to state.notes
    case 'ADD_NOTE':
        return [...state, action.changedNote]
    


    // delete request from database
    case 'START_DELETE_NOTE_REQUEST':
        return state
    // go through state notes check for deleted notes so they arent re-rendered
    case 'DELETE_NOTE':
        let remainingNotes = state.map(note => {
            if (note.id === action.note_id) {
                return action.note_id
            } else {
                return note
            }
            
        })
        return remainingNotes


        default:
            return state
    }
}