import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        const divstyle = {
            width: '100%',
            height: '100%'
          }
        return (
            <div style={divstyle}>
                <h1>Welcome to this Company!</h1>
            </div>
        )
    }
}