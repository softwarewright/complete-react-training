import React from 'react';
import Cockpit from './Cockpit/Cockpit';
import People from './People/People';
import withClass from './hoc/WithClass';
import Auxiliary from './hoc/Auxiliary';
import './App.css';
import AuthContext from "../context/auth.context";


class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  state = {
    people: [
      { id: 'a', name: "Darrius", age: 25 },
      { id: 'b', name: "Keionne", age: 25},
      { id: 'c', name: "James", age: 67 }
    ],
    showPeople: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount = () => {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate = () => {
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  // componentWillMount = () => {
  //   console.log('[App.js] componentWillMount')
  // }

  nameChangedHandler = (id, event) => {
    const index = this.state.people.findIndex(p => p.id === id);
    
    const person = {
      ...this.state.people[index],
      name: event.target.value
    };

    const people = [...this.state.people];
    people[index] = person;

    // Use this state update method whenever you depend on old state...
    this.setState((prevState, props) =>({ 
      people, 
      changeCounter: prevState.changeCounter + 1
    }))
  }

  togglePeopleHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  deletePerson = (id) => {
    this.setState({ people: this.state.people.filter(p => p.id !== id) })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render');

    let people = null;
    let numberOfPeople = 0;

    if(this.state.showPeople) {
      people = (
        <People 
          people={this.state.people} 
          changed={this.nameChangedHandler} 
          clicked={this.deletePerson} />
      )

      numberOfPeople = people.length;
    }

    return (
      <Auxiliary>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler}}>
          { this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            numberOfPeople={numberOfPeople}
            showPeople={this.state.showPeople}
            clicked={this.togglePeopleHandler} /> : null }
          {people}
        </AuthContext.Provider>
        <button onClick={()=>this.setState({ showCockpit: !this.state.showCockpit})}>Toggle Cockpit</button>
      </Auxiliary>
    )
  }
}

export default withClass(App, "App");
