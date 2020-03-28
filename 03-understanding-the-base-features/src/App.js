import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {

  state = {
    people: [
      { name: "Darrius", age: 25 },
      { name: "Keionne", age: 25},
      { name: "James", age: 67 }
    ],
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 22 },
        { name: "Tony", age: 52 },
        { name: "James", age: 67 }
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: "Darrius", age: 22 },
        { name: event.target.value, age: 52 },
        { name: "James", age: 67 }
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '.5rem',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello React App</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Ricky")}>Switch Name</button>
        {
          this.state.people
            .map( ({ name, age }, index) => <Person changed={this.nameChangedHandler.bind(this)} click={this.switchNameHandler.bind(this, "Ricky")} key={index} name={name} age={age} />)
        }
      </div>
    );
  }
}

// const App = () => {
//   const [personState, setPersonState] = useState({
//     people: [
//       { name: "Darrius", age: 25 },
//       { name: "Keionne", age: 25},
//       { name: "James", age: 67 }
//     ],
//   })
//   const [otherState, setOtherState] = useState({
//     otherState: "The other state"
//   })

//   console.log(personState, otherState)

//   const switchNameHandler = () => {
//     // DON'T DO THIS: this.state.people[0].name = "Changed dat name";
//     setPersonState({
//       people: [
//         { name: "DWright", age: 25 },
//         { name: "Keionne", age: 25},
//         { name: "Jackie", age: 67 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hello React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {personState.people.map( ({ name, age }, index) => <Person key={index} name={name} age={age} />)}
//     </div>
//   );
//   // return React.createElement('div', { className:"App"}, React.createElement('h1', null, 'Hello React App'));
// }

export default App;
