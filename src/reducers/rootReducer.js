const initialState = {
    participants: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_PARTICIPANT':
        //     console.log("Participant added");
        //     return { ...state, visibilityFilter: action.name };
        // case 'REMOVE_PARTICIPANT':
        //     console.log("Participant removed");
        //     return { ...state, visibilityFilter: action.name };
        default:
            return state
    }
}
