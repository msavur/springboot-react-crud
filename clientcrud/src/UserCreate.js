import React, {Component} from 'react';
import './App.css';

class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("NAME: " + event.target.name + " VALUE: " + event.target.value)
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        var newStudent = {firstName: this.state.firstName, surname: this.state.surname};
        this.createUser(newStudent);
    }


    createUser(user) {
        fetch('http://localhost:8080/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }


    render() {
        return (
            <div className="App-header">
                <form>
                    <div>
                        <input type="text" placeholder="Firstname" name="firstName"
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Surname" name="surname"
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserCreate;
