import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    
    super();
    this.state = {
      monsters:[],
      searchField: '',
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

      const filteredMonsters = this.state.monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
      });

      return <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters'
          onChange={(event)=>{
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();
            
            this.setState(()=>{
              return {searchField};
            })
          }}
          />
        {filteredMonsters.map((monster)=>{
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
