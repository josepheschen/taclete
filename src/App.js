import React from 'react';
import LoginScreen from './loginScreen'
import './App.css';
import csuLogo from './csuLogo.png'
import rotcLogo from './rotcLogo.png'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> TACLETE </h1>
        <img src={rotcLogo} className="App-rotcLogo" alt="logo" />
        <img src={csuLogo} className="App-csuLogo" alt="logo" />

        <br/>
        <LoginScreen />
      </header>
    </div>
  );
}

export default App;
