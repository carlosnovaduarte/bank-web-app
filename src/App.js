import React, { Component } from 'react';
import lomLogo from './images/lom.png'
import Operations from'./components/Operations.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lomLogo} className="App-logo" alt="lomLogo" />
          <h1 className="App-title">Welcome to the Pegasus Project Platform</h1>
        </header>
        <p className="App-intro">
          What would you like to do?
        </p>
        <Operations/>
      </div>
    );
  }
}

export default App;

