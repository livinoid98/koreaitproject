import React, { Component } from 'react';
import ValidationSample from './ValidationSample'
import IterationSample from './Components/IterationSample'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <ValidationSample></ValidationSample>
        <IterationSample></IterationSample>
      </div>
    );
  }
}

export default App;