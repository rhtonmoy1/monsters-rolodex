import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then((users)=>
    this.setState(
      ()=>{
        return { monsters: users};
      },

      ()=>{
        console.log(this.state);
      }
    )
    )
  }

    render(){
      return <div className='App'>
        {this.state.monsters.map((monster)=>{
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
