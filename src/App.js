import React, { Component } from 'react';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import './App.css'

class App extends Component {
  render() {
    return (
      <main>
      <title>
        <Title content ="" />  
      </title>
      
        <Scoreboard Scoreboard=""/>
      </main>  
    );
  }
}

export default App;
