import React from 'react';
import './Person.css';
/** @jsx jsx */
import {css, jsx } from '@emotion/core'

const Person = ({name, age, children, click, changed}) => {
    
    // const style = {
    //     '@media (min-width: 501px)': {
    //         width: '450px'
    //     },
    // }
    
    const style = css`
        width: 60%;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        margin: 2rem auto;
        @media (min-width: 450px) {
            width: 450px;
        }
    `;

    return (
        <div onClick={click} css={style}>
            <p> I'm a Person! My name is {name}. I'm {age} years old.</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    );
}
export default Person;

