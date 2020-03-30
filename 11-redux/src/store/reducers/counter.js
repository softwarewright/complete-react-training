import * as actionTypes from '../actions';
const initialState = {
    value: 0,
}

const reducer = (state = initialState, action) => {
    console.log(state,action)
    switch(action.type) {
        case actionTypes.INCREMENT: 
            return {...state, value: state.value + 1};
        case actionTypes.DECREMENT:
            return {...state, value: state.value - 1};
        case actionTypes.ADD:
            return {...state, value: state.value + action.payload};
        case actionTypes.SUBTRACT:
            return {...state, value: state.value - action.payload};
        default:
            return state;
    }
}

export default reducer;