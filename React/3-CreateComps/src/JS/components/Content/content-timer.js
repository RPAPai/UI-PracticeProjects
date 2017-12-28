import React from 'react';

export class Timer extends React.Component {
    constructor(){
        super();
        this.state= {date: new Date().toLocaleTimeString() };
    }
    render(){
        setInterval(()=>{
            this.setState({
                date: new Date().toLocaleTimeString(),
            });
        }, 1000);
        return(
            <div>
                <h3> Timer and state demo - watch the node update in dev.tool </h3>
                <h2>Time: {this.state.date}.</h2>
            </div>
        )
    }
}
