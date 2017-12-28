import React from 'react';

// Presentational component
class ChildComp extends React.Component {
  render(){
    const text=(this.props.status)? "Make parent poor ": "Make parent rich!!!!";
    return(
        <button onClick={this.props.changeParent}> {text} </button>
    )
  }
}

//Container Component--  Demostrates child changing parent state (indirecltly)
 class ParentComp extends React.Component {
  constructor(props){
    super(props);
    this.state={ status: true }
    this.changeMyStatus=this.changeMyStatus.bind(this);
  }

  changeMyStatus(){
    let newStatus=!this.state.status;
    this.setState({status:!this.state.status}) ;
  }

  render() {
//    let text=(this.state.status)?  "rich !!!!":"poor :(";
    return(
    <div>
      <h2> I am a {(this.state.status)?  "rich !!!!":"poor :("} parent  </h2>
      <ChildComp status={this.state.status} changeParent={this.changeMyStatus}/>
    </div>
  )
}
}


//Presentational Component--  Demostrates child changing parent state (indirecltly)
export class Child2Parent extends React.Component {
  render(){
    return(
      <ParentComp/>
    )
  }
}
