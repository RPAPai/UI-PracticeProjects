import React from 'react';
import {NavLink} from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return( 
            <nav className="navbar navbar-default"> 
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="activeNav" to="/App">Employee</NavLink></li>
                            <li><NavLink activeClassName="activeNav" to="/Learn">Learn</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}