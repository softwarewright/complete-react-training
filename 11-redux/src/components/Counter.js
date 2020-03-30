import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

const Counter = props => {
    // const [counterState, setCounterState] = useState({
    //     counter: 0
    // })

    return (
        <div>
            <div>Current Counter: {props.counter}</div>
            <button onClick={props.onIncrementCounter}>Increment</button>
            <button onClick={props.onDecrementCounter}>Decrement</button>
            <button onClick={props.onAddFiveCounter}>Add 5</button>
            <button onClick={props.onSubFiveCounter}>Subtract 5</button>
            <hr/>
            <button onClick={props.onStoreResult.bind(this, props.counter)}>Store Result</button>
            <ul>
                {
                    props.results
                        .map( result => (<li key={result.id} onClick={props.onRemoveResult.bind(this, result.id)}>{result.value}</li>))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter.value,
    results: state.results.results
});

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT}),
    onAddFiveCounter: () => dispatch({ type: actionTypes.ADD, payload: 5}),
    onSubFiveCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5}),
    onStoreResult: result => dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onRemoveResult: index => dispatch({ type: actionTypes.REMOVE_RESULT, payload: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);