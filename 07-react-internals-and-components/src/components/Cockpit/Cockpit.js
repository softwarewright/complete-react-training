import React, { useEffect, useRef, useContext } from 'react';
import { css, jsx} from "@emotion/core";
import AuthContext from "../../context/auth.context";

import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${props => props.show ? 'red' : 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: .5rem;
  cursor: pointer;
  :hover {
    background-color: lightgreen;
  }
`

 function Cockpit(props) {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('[Cockpit.js]: ', authContext)

    // Called on every render
    useEffect(() => {
        console.log('[Cockpit.js] useEffect people')
        toggleBtnRef.current.click()
        
        // http request, etc
        return () => {
            console.log("[Cockpit.js] cleanup work in useEffect");
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd use effect people');

        return () => {
            console.log("[Cockpit.js] 2nd cleanup work in useEffect");
        }
    })

    const classes = [];

    if(props.numberOfPeople <= 2) {
        classes.push('red');
    }

    if(props.numberOfPeople <= 1) {
        classes.push('bold');
    }
      
    return (
        <div>
            <h1 className={classes.join(" ")}>{props.title}</h1>
            <StyledButton
                ref={toggleBtnRef} 
                show={props.showPeople}
                onClick={props.clicked}>
                Switch Name
            </StyledButton>
            <button onClick={authContext.login}>Login</button>

            {/* <AuthContext.Consumer>
                { (context) => <button onClick={context.login}>Login</button> }
            </AuthContext.Consumer> */}
        </div>
    )
}

// Only update when props change
export default React.memo(Cockpit)