//import * as actionType from './../actions/actionType';

const counterReducer = (state=0, action) => { //type and payload key
    switch (action.type) {
        case 'ADD' : 
            return state + action.payload;
        case 'SUB' :
            return state - action.payload;
        default : return state;
    }
}

export default counterReducer;