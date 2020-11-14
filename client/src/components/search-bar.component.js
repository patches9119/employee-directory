import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class searchBar extends Component {
    render() {
        return (
            <div>
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
            </div>
        )
    }
}