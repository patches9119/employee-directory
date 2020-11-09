import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/api/employee" className='navbar-brand'>Employee List</Link>
                <Link to="/api/add" className='navbar-brand'>Create Employee</Link>
            </nav>
        )
    }
}