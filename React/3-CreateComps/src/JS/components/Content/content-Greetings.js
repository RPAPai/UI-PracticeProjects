import React from 'react';
// Content demostrates - use of state vs class member
export class Greetings extends React.Component {
    constructor(){
            super();
            this.state={name:"Bob"}; // With state - Any changes to state will automatically trigger render method
                                    //  and hence results in re-rendering this component automatically
            this.lname="Paul";     // Without state property will not be helpful for dynamic rendering,
                                  // Ok for Static Assignment
        }

    render(){
             setTimeout(
                ()=>{
                    this.setState(
                        {name:"John"}
                    );
                } ,2000);

            return(
                <div> <h4> Hello! My name is {this.state.name} {this.lname} </h4> </div>

            )

    }
}
