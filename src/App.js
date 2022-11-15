import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    console.log('1 constructor');
    super();
    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    console.log('3 compponenrtDidMount');
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
      console.log('2 render');
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
