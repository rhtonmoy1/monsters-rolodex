import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster:[
        {
          name:'Tonmoy'
        },
        {
          name:'Foysal'
        },
        {
          name:'Rafi'
        },
        {
          name:'Sayem'
        },
      ]
    };
  }

    render(){
      return <div className='App'>
        {this.state.monster.map((monster)=>{
          return <h1>{monster.name}</h1>
        })}
      </div>
    }
} 
  


export default App;
