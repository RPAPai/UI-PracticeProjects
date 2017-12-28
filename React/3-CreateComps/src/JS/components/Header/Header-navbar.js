import React from 'react';
//import {Styles} from '../css/mystyles.css';
//import  from './Navbar.css';

export class Navbar extends React.Component {
    constructor() {
        super();
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

 /*   render(){
        return(
            <div>
                <div className="topnav">
                    <li> <a className="active" href="#home">Home</a></li>
                    <li> <a href="#form">Enroll</a> </li>
                    <li> <a href="#image">Image</a></li>
                    <li> <a href="#selection">Selection</a></li>
                    <li> <a href="#form">&nbsp;Form</a></li>
                </div>
                <div>
                    <button type="button" onClick={this.handleClick}>Sign Up</button>
                    <button type="button" onClick={this.handleClick}>Log In</button>
                </div>
            </div>
        )
    }*/
   /*   Old Navbar */
   render(){
        var styles = {
            navBar: {
                color: 'white',
                background:' #4CAF50',
                height:'30px'

            },
            left: {
                textAlign: 'left'
            },
            leftNav: {
                float: 'left',
                margin:'5px'
            },
            rightNav: {
                float: 'right',
                margin:'5px'

            },
            verticalLine: {
            },
            li: {
                display:'inline',
                padding:'2px 6px'
            },
            ul: {
              display:'inline',

            },
            a: {
                textDecoration:'none'
            }
        };



        return(
            <header>
                <div style={styles.navBar} >
                    <div style={styles.leftNav} >
                        <ul style={styles.ul}>
                            <li style={styles.li}> <a href="#form" style={styles.a}>Enroll</a> </li>
                            <li style={styles.li}> <a href="#image" style={styles.a}>Image</a></li>
                            <li style={styles.li}> <a href="#selection" style={styles.a}>Selection</a></li>
                            <li style={styles.li}> <a href="#form" style={styles.a}>&nbsp;Form</a></li>
                        </ul>
                    </div>
                    <div style={styles.rightNav}>
                        <div>
                            <button type="button">Sign Up</button>
                            <button type="button">Log In</button>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

