import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Smurfs from './Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
      </div>
    );
  }
}

export default App;
