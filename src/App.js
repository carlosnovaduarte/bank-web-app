import React, { Component } from 'react';
import logo from './logo.svg';
import lomLogo from './images/lom.png'
import './App.css';
import Button from './components/Button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lomLogo} className="App-logo" alt="lomLogo" />
          <h1 className="App-title">Welcome to Life on Mars!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button/>
      </div>
    );
  }
}

export default App;

