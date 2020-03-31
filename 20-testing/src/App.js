import React, {useState} from 'react';
import './App.css';
import Navigation from './Navigation';

function App() {
  const [authState, setAuthState] = useState({
    authenticated: false
  })


  return (
    <div className="App">
      <Navigation authenticated={authState.authenticated} />
      <button onClick={() => setAuthState({authenticated: !authState.authenticated})}>
        Authenticate
      </button>
    </div>
  );
}

export default App;
