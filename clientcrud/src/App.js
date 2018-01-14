import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./UserList";
import UserCreate from "./UserCreate";


class App extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="App">
           <UserList/>
           <UserCreate createUser = {this.createUser}/>
      </div>
    );
  }
}

export default App;
