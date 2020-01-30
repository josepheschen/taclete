import React from 'react';
import BaseScreen from './baseScreen';
import './App.css';
import csuLogo from './Images/csuLogo.png'
import rotcLogo from './Images/rotcLogo.png'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> TACLETE </h1>
        <img src={rotcLogo} className="App-rotcLogo" alt="logo" />
        <img src={csuLogo} className="App-csuLogo" alt="logo" />

        <br/>
        <BaseScreen />
      </header>
    </div>
  );
}

export default App;
