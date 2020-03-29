import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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


class App extends React.Component {

  state = {
    people: [
      { id: 'a', name: "Darrius", age: 25 },
      { id: 'b', name: "Keionne", age: 25},
      { id: 'c', name: "James", age: 67 }
    ],
    showPeople: false
  }

  nameChangedHandler = (event, id) => {
    const index = this.state.people.findIndex(p => p.id === id);
    
    const person = {
      ...this.state.people[index],
      name: event.target.value
    };

    const people = [...this.state.people];
    people[index] = person;

    this.setState({ people })
  }

  togglePeopleHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  deletePerson(id) {
    this.setState({ people: this.state.people.filter(p => p.id !== id) })
  }

  render() {
    let people = null;

    if(this.state.showPeople) {
      people = this.state.people
        .map( ({ name, age, id }) => <Person changed={this.nameChangedHandler.bind(this)} click={this.deletePerson.bind(this, id)} key={id} name={name} age={age} />)
      // style.backgroundColor = "red";
    }

    const classes =[];

    if(this.state.people.length <= 2) {
      classes.push('red');
    }

    if(this.state.people.length <= 1) {
      classes.push('bold');
    }

    if(Math.random() > .5) throw new Error('Something when wrong');

    return (
      <ErrorBoundary>

      <div className="App">
        <h1 className={classes.join(" ")}>Hello React App</h1>
        <StyledButton show={this.state.showPeople} onClick={this.togglePeopleHandler}>Switch Name</StyledButton>
        <div> { people } </div>
      </div>
      </ErrorBoundary>

    );
  }
}

export default App;
