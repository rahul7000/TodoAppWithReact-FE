import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
render() {
    return (
        <>
        <h1> Hi {this.props.match.params.name} !!</h1>
        <div className="container">
            <p/>Welcome to TODO App, You can manage your todos from <Link to='/todos'>here</Link>
        </div>
        </>
    );
}
}

export default Welcome;