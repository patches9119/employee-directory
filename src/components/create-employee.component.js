import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmployee extends Component {

        // this.handleInputChange = this.handleFormSubmit.bind(this);

        state = {
            first_name: '',
            last_name: '',
            office: 0,
            email: ''
        }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
    }

    onSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        const employee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            office: this.state.office,
            email: this.state.email
        }

        console.log(employee);

        axios.post('http://localhost:5000/employee/add', employee)
          .then(res => {
            console.log(res.data);
          })

        this.setState({
          first_name: '',
          last_name: '',
          office: 0,
          email: ""
        });
      

        // window.location = '/';
    };



    render() {
        return ( 
    <div>
      <h3>Create New Employee</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>First Name: </label>
          <input  type="text"
              required
              name="first_name"
              className="form-control"
              value={this.state.first_name}
              onChange={this.handleInputChange}
              />
        </div>
        <div className="form-group"> 
          <label>Last Name: </label>
          <input  type="text"
              required
              name="last_name"
              className="form-control"
              value={this.state.last_name}
              onChange={this.handleInputChange}
              />
        </div>
        <div className="form-group"> 
          <label>Office Number: </label>
          <input  type="text"
              required
              name="office"
              className="form-control"
              value={this.state.office}
              onChange={this.handleInputChange}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Employee" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}