import React from 'react';

//Footer demostrates - use of state
export class Footer extends React.Component {
    render(){
        const myStyle = {
            color: 'dark-blue',
            background:'gray'
        };
        return(
            <footer style={myStyle}>
                <p>I am Footer</p>
            </footer>

        )
    }
}


