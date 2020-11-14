import React, { Component } from 'react';
import ViewEmployee from './view-employee.component.js';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Employee from '../../root/models/employee.js';

const Employee = props => (
    <tr>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.office}</td>
      <td>{props.employee.email}</td>
      {/* <td>
        <a href="#" onClick={() => { props.viewEmployee(props.employee._id) }}>view</a>
      </td> */}
    </tr>
  )

export default class EmployeeList extends Component {

    state = {employees: []};


    componentDidMount() {
        axios.get('http://localhost:5000/api/employee')
            .then(res => {
                console.log(res.data);
                this.setState({employees: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    employeeList() {
        return this.state.employees.map(currentemployee => {
            return <Employee employee={currentemployee} key={currentemployee._id} />;
        })
    }

    render() {
        return ( 
            <div>
            <h3>Current Employees</h3>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By:
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
            <div style={{margin:"1rem"}}>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Office</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.employeeList() }
                </tbody>
            </table>
            </div>
        )
    }
}