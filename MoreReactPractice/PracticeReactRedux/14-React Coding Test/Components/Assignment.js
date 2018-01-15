import React from 'react';

export class Assignment extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <span>due {this.props.dueDate}</span>
            </div>
        );
    }
}