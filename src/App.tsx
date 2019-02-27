import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.scss';
import CustomButton from "./components/CustomButton/CustomButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <CustomButton title={'s'} buttonType={'primary'} onClick={()=>console.log("pepe")}/>
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
}

export default App;
