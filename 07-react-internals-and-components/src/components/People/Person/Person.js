import React from 'react';
import withClass from '../../hoc/WithClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth.context';
/** @jsx jsx */
import {css, jsx } from '@emotion/core'
import PropTypes from 'prop-types';

class Person extends React.Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context);
    }

    render() {
        console.log('[Person.js] rendering...')
        const {name, age, children, click, changed} = this.props;
        
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
            <React.Fragment>
                {/* <AuthContext.Consumer>
                { 
                    (context) => ( */}
                        <div >
                            {/* { context.authenticated ? <p> Authenticated </p> : null } */}
                            { this.context.authenticated ? <p> Authenticated </p> : null }
                            <p onClick={click}> I'm a Person! My name is {name}. I'm {age} years old.</p>
                            <p>{children}</p>
                            <input ref={this.inputElementRef} key="i1" type="text" onChange={changed} value={name} />
                        </div>
                    
                {/*
                    )    
                }
                </AuthContext.Consumer> */}
            </React.Fragment>
        );
    }
}
// const {name, age, children, click, changed} = this.props;

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);

