import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './assets/styles/App.scss';
import CustomButton from "./components/CustomButton/CustomButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HUKA! 🌽</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
