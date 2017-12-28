import React from 'react';
import {Navbar} from './Header/header-navbar';

// Follow Header-title.js to check demo of state and prop
export class Header extends React.Component {
    render() {
    const myStyle = {
        color: 'dark-blue',
        background:'gray'
    };
    // header-title and header subtitle demonstrates use of state and props
    return(

                <Navbar/>

        )
    }
}