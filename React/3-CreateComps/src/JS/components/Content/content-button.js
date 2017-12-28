import React from 'react';

export class Button extends React.Component {
    constructor(){
        super();
        this.state={btnCount:0};
        this.setCounter=this.setCounter.bind(this);
    }

    setCounter(e) {
        let cnt=this.state.btnCount;
        cnt++;
        this.setState({btnCount:cnt});
    }

    render(){
        return(
            <div>
                <button  type="button" onClick={this.setCounter}> Click Me </button>
               <p>This button Clicked {this.state.btnCount} times !!! </p>
            </div>
        )
    }
}
