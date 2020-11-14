import React, { Component } from 'react';
import axios from 'axios';

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

export default class employeeSearch extends Component {

    state = {
        employees: [],
        search: ""
    };

    employeeList() {
        return this.state.employees.map(currentemployee => {
            return <Employee employee={currentemployee} key={currentemployee._id} />;
        })
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log(`You searched for ${this.state.search}`);

        axios.get('/api/employee')
            .then(res => {
                var test = [];
                var test2 = [];
                var test3 =[];
                console.log(res.data);
                console.log(`You searched for ${this.state.search} within axios call.`);
                test = res.data;
                test2 = test.filter(employee => employee.first_name.includes(`${this.state.search}`));
                for(let i = 0; i < test2.length; i++) {
                    test3.push(test2[i]);
                }
                test2 = test.filter(employee => employee.last_name.includes(`${this.state.search}`));
                for(let i = 0; i < test2.length; i++) {
                    test3.push(test2[i]);
                }
                test2 = test.filter(employee => employee.office.includes(`${this.state.search}`));
                for(let i = 0; i < test2.length; i++) {
                    test3.push(test2[i]);
                }
                test2 = test.filter(employee => employee.email.includes(`${this.state.search}`));
                for(let i = 0; i < test2.length; i++) {
                    test3.push(test2[i]);
                }
                console.log(test3);
                this.setState({employees: test3});
            })
            .catch(err => {
                console.log(err);
            })
      };
    
    render() {
        return (
            <div>
                <h3>Search for any employee!</h3>
                <div>
                <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />

                <button onClick={this.handleFormSubmit} className="btn btn-secondary">Submit</button>
                </form>
            </div>


            <div>
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
            </div>
        )
    }
}