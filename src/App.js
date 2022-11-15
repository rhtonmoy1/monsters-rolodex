import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster1:{
        name:'Tonmoy'
      },
      monster2:{
        name:'Foysal'
      },
      monster3:{
        name:'Rafi'
      },
    };
  }

    render(){
      return <div className='App'>
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
      </div>
    }
} 
  


export default App;
