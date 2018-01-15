import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class HelloPlanet extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
                <h1>Hello, I am from HelloPlanet component!</h1>
                Hello World! Welcome to my first React application!
            </div>
        );
    }
}

HelloPlanet.propTypes = {
    children: PropTypes.element.isRequired
}

ReactDOM.render(
    <div>
        <HelloPlanet>
            <p>This is paragraph</p>
        </HelloPlanet>
    </div>,
    document.getElementById('firstapp')
);