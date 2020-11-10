import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import company from '../assets/company.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#top"><img src={company} title="company"/></a>
                <Link to='/' className="navbar-brand"> Company</Link>
                <Link to="/api/employee" className='navbar-brand'>Employee List</Link>
                <Link to="/api/add" className='navbar-brand'>Create Employee</Link>
            </nav>
        )
    }
}