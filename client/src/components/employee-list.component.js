import React, { Component } from 'react';
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
        axios.get('/api/employee')
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

    sortArray(employees) {
        return employees.sort((a,b) => {
            let fa = a.first_name.toLowerCase(),
            fb = b.first_name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
        });
    }

    sortEmployees = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        var oldList = this.state.employees;

        var newList = this.sortArray(oldList);

        console.log(newList);

        this.setState({employees: newList});
    }

    render() {
        return ( 
            <div>
                <h3>Current Employees</h3>
                <input onClick={this.sortEmployees} value="Sort by First Name" className="btn btn-secondary" />
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