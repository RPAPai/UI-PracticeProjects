import React from 'react';

export class InputDemo extends React.Component {
   constructor(props){
   super(props);

   this.state={myName: this.props.name}

   this.statVal=this.props.name;
   this.handleInputChange=this.handleInputChange.bind(this);
   }

  handleInputChange(evnt){
     this.statVal= evnt.target.value;
     this.setState({myName: evnt.target.value})

  }

   render(){
   return(
   <div>
      <input type="text" value={this.state.myName} onChange={this.handleInputChange}/>
      <p> I will change Everytime state changes(i.e input)::  {this.state.myName} </p>
      <p> I am a static Variable.. I will change only when props changes... ::  {this.statVal} </p>

      </div>
   )
   }
}
