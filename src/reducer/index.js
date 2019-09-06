import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import nameReducer from './nameReducer';

const counterApp = combineReducers({
    counterReducer, nameReducer
})

export default counterApp;