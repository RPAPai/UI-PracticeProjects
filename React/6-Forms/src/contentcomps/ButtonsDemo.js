import React from 'react';
import { Grid,ButtonToolbar, Button } from 'react-bootstrap';


export default class ButtonsDemo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      buttonPressed:'Press any button...'
    }
    this.updateMessage=this.updateMessage.bind(this);
  }

  updateMessage(e){
      this.setState({buttonPressed:'You clicked: '+e.target.name});
  }


  render(){
    return(
      <div>
        <h5> {this.state.buttonPressed} </h5>
        <ButtonToolbar>
           {/* Standard button */}
           <Button name="Default" onClick={this.updateMessage}>Default</Button>

           {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
           <Button name="primary" bsStyle="primary" onClick={this.updateMessage}>Primary</Button>

           {/* Indicates a successful or positive action */}
           <Button name="success"  bsStyle="success" onClick={this.updateMessage}>Success</Button>

           {/* Contextual button for informational alert messages */}
           <Button name="info" bsStyle="info" onClick={this.updateMessage}>Info</Button>

           {/* Indicates caution should be taken with this action */}
           <Button name="warning" bsStyle="warning" onClick={this.updateMessage}>Warning</Button>

           {/* Indicates a dangerous or potentially negative action */}
           <Button name="danger" bsStyle="danger" onClick={this.updateMessage}>Danger</Button>

           {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
           <Button name="link" bsStyle="link" onClick={this.updateMessage}>Link</Button>

         </ButtonToolbar>
      </div>
      )
  }
}
