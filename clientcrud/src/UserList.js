import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            isLoading : false
        }
    }

    componentDidMount(){
        this.setState({isLoading: true});
        fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}))
    }

  render() {
      const {users, isLoading} = this.state;
      if (isLoading) {
          return <p>Loading...</p>;
      }
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Spring Boot and React CRUD Options</h2>
          </div>
          <div>
              <h2>User List</h2>
              {users.map((user) =>
                  <div key={user.id}>
                      {user.firstName}
                      {user.surname}
                  </div>
              )}
          </div>
      </div>
    );
  }
}

export default UserList;
