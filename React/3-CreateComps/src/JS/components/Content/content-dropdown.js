import React from 'react';

export class Dropdown extends React.Component {
    constructor(){
        super();

        this.state={course:'ReactJS'};
        this.handleSelection=this.handleSelection.bind(this);
    }


    handleSelection(e) {
        this.setState({course:e.target.value});
        e.preventDefault();
    }


    render(){
        return(
            <div id="selection">
                <h3>Dropdown Demo </h3>
                <label>
                    Pick your course:
                    <select value={this.state.course} onChange={this.handleSelection}>
                        <option value="ReactJS">React JS</option>
                        <option value="NodeJS">Node JS</option>
                        <option value="AngularJS">Angular JS</option>
                        <option value="BackboneJS">Backbone JS</option>
                    </select>
                </label>
                <span>  Congratulation you are enrolled for {this.state.course} course !!</span>
            </div>
        )
    }

}

