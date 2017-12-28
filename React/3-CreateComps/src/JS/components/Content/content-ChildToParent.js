import React from 'react';
// //
const lists= {
  names: ['fruits','vegitables','food'],
  tools: ['mongoDB','express','react','node']
};

//Content demostrates - child changing parent state (indirecltly)
export class ChildToParent extends React.Component {
  constructor(props){
    super(props);

    this.state={
      myList: lists.names
    }
    this.toggleList=this.toggleList.bind(this);
    this.toggleList=this.toggleList.bind(this);
  }

  toggleList(){
    (this.state.myList===lists.names) ?
    this.setState({myList:lists.tools}) :
    this.setState({myList:lists.names}) ;
    console.log(this.state.myList);
  }

  render() {
    return( <div>
      <h2> Hi There child to prarent </h2>
      <ListDisplay list={this.state.myList} toggleList={this.toggleList}/>


    </div>
  )
}
}

class ListDisplay extends React.Component {
  constructor(props) {
    super(props) ;
    this.state={ myList: this.props.list}

  }

  render(){
    let listElm=this.props.list.map((n,i)=><li key={i}> {n} </li>);

    return(
      <div>
        <ul> {listElm}  </ul>
        <button onClick={this.props.toggleList}> toggle list </button>
      </div>
    )
  }
}
