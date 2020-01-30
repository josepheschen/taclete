import React from 'react';
import logo from './logo.svg';
import BaseScreen from './baseScreen'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> TACLETE </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <BaseScreen />
      </header>
    </div>
  );
}

export default App;
