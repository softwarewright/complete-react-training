const redux = require('redux');
const createStore = redux.createStore;
redux.applyMiddleware()


const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'ADD':
            return {...state, counter: state.counter + action.payload};
    }

    return state;
}

// Store 
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// dispatch

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'ADD', payload: 10 });

console.log(store.getState());

