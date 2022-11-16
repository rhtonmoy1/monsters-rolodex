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
    console.log('1 constructor');
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
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters'
          onChange={(event)=>{
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster)=>{
              return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(()=>{
              return {monsters: filteredMonsters};
            })
          }}
          />
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
