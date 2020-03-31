import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    console.log(state,action)
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {...state, results: [...state.results, { id: new Date(), value: action.payload }]};
        case actionTypes.REMOVE_RESULT:
            return {...state, results: state.results.filter(r=> r.id !== action.payload)};
        default:
            return state;
    }
}

export default reducer;