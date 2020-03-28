import React from 'react';
import './Person.css';

const Person = ({name, age, children, click, changed}) => (
    <div className="Person" onClick={click}>
        <p>
            I'm a Person! My name is {name}. I'm {age} years old.
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
    </div>
);
export default Person;

