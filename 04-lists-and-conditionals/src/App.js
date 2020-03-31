import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';
/** @jsx jsx */
import { css, jsx} from "@emotion/core";
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


function App(props) {

  const [state,setState] = useState({
    people: [
      { id: 'a', name: "Darrius", age: 25 },
      { id: 'b', name: "Keionne", age: 25},
      { id: 'c', name: "James", age: 67 }
    ],
    showPeople: false
  })

  const nameChangedHandler = (id, event) => {
    console.log(event, id);
    const index = state.people.findIndex(p => p.id === id);
    
    const person = {
      ...state.people[index],
      name: event.target.value
    };

    const people = [...state.people];
    people[index] = person;

    setState({ ...state,people })
  }

  const togglePeopleHandler = () => {
    setState({
      ...state,
      showPeople: !state.showPeople
    })
  }

  const deletePerson = (id) => {
    setState({ people: state.people.filter(p => p.id !== id) })
  }

    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '.5rem',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen'
    //   }
    // };

    // const style = css`
    //   background-color: green;
    //   font: inherit;
    //   border: 1px solid blue;
    //   padding: .5rem;
    //   cursor: pointer;
    //   :hover {
    //     background-color: lightgreen;
    //   }
    // `

    let people = null;

    if(state.showPeople) {
      people = state.people
        .map( ({ name, age, id }) => <Person changed={nameChangedHandler.bind(this,id)} click={deletePerson.bind(this, id)} key={id} name={name} age={age} />)
      // style.backgroundColor = "red";
    }

    const classes =[];

    if(state.people.length <= 2) {
      classes.push('red');
    }

    if(state.people.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Hello React App</h1>
        <StyledButton show={state.showPeople} onClick={togglePeopleHandler}>Switch Name</StyledButton>
        <div> { people } </div>
      </div>
    );
}

export default App;
