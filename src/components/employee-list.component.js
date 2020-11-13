import React, { Component } from 'react';
import ViewEmployee from './view-employee.component.js';
import searchBar from './search-bar.component.js';
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

    viewEmployee(id) {
        console.log("view has been pushed")
    }

    render() {
        return ( 
            <div>
            <h3>Current Employees</h3>
            <searchBar />
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
            <ViewEmployee />
            </div>
        )
    }
}