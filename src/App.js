import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: {firstName:'Rafiul Hasan', lastName:'Tonmoy'},
      company: 'V-Generation',
    }
  }

    render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello I am {this.state.name.firstName} {this.state.name.lastName}<br></br>
              I work at {this.state.company}
            </p>
             <button onClick={()=>{
              this.setState(
                ()=>{
                return {
                  name:{firstName:'Rakibul Hasan',lastName:'Foysal'},
              };
            }, 
              ()=>{
                console.log(this.state);
              }
              );
             }}
             >Change Name</button>
          </header>
        </div>
      );
    }
} 
  


export default App;
