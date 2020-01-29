import React from 'react';
import LoginScreen from './loginScreen'
import './App.css';
import csuLogo from './csuLogo.png'
import rotcLogo from './rotcLogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={rotcLogo} className="App-rotcLogo" alt="logo" />
        <img src={csuLogo} className="App-csuLogo" alt="logo" />
        

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginScreen />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
