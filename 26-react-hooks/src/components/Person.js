import React, { useState, useEffect} from 'react';

function Person() {
    const [personState, setPersonState] = useState({
        name: 'Darrius',
        age: 25
    })

    useEffect(() => {
        console.log("componentDidMount")
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate: personState")
    }, [personState]);


    useEffect(() => {
        console.log("componentDidUpdate: personState")
    });

    return (
        <div>
            <div>Name: {personState.name}</div>
            <div>Age: {personState.age}</div>
            <button onClick={()=> setPersonState({name: "James", age: 34 })}>Change</button>
        </div>
    )
}

export default Person;