import React from 'react';

export default class Header extends React.Component{
    render(){
        return( 
            <nav className="navbar navbar-default"> 
                 <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                            <li><a href="">Employee</a></li>
                            <li><a href="">Learn</a></li>
                        </ul>
                    </div>
                 </div>
                    {/*<div>Hi! Let's start a simple Todo app!</div>
                    <div>This is the employee form header section</div>*/}
            </nav>
        )
    }
}