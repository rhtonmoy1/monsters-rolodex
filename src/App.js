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
          id:'1',
          name:'Tonmoy'
        },
        {
          id:'2',
          name:'Foysal'
        },
        {
          id:'3',
          name:'Rafi'
        }, 
        {
          id:'4',
          name:'Sayem'
        },
      ]
    };
  }

    render(){
      return <div className='App'>
        {this.state.monster.map((monster)=>{
          return (
            <div key={monster.id}> 
               <h1>{monster.name}</h1>
            </div>
          ); 
        })}
      </div>
    }
} 
  


export default App;
