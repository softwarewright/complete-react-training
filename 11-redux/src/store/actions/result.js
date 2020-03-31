import * as actionTypes from './actionsTypes';


export const storeResult = payload => {
    // return async (dispatch, getState) => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch({
            type: actionTypes.STORE_RESULT,
            payload
            // payload: getState().counter.value
        })
    }
} 

export const removeResult = payload => {
    return {
        type: actionTypes.REMOVE_RESULT,
        payload
    }
}