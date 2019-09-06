const nameReducer = (state='foo', action) => {
    switch(action.type) {
        case 'CHANGE' : 
            return action.payload;
        default:
            return state;
    }
}

export default nameReducer;