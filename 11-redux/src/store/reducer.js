import { combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import resultsReducer from './reducers/results';

export default combineReducers({
    counter: counterReducer,
    results: resultsReducer
});