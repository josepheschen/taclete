import React from 'react';
import logo from './logo.svg';
import LoginScreen from './loginScreen'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> TACLETE </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <LoginScreen />
      </header>
    </div>
  );
}

export default App;
