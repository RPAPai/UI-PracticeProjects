import React, { Component } from 'react';
import './App.css';
const Url='https://api.coindesk.com/v1/bpi/currentprice.json';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
       rate:0,
       code:" ",
       disclaimer:" ",
       chartName: " ",
       display : false
       }
       this.handleClick=this.handleClick.bind(this);

     }


  handleClick(){
    let toggle=this.state.display;

    if(toggle){
      this.setState({
                  display:false})

    } else {
      fetch(Url)
      .then(response=>response.json())
      .then((data)=>{
        //    console.log("askd",data.bpi.USD.rate);
            let {disclaimer,chartName,bpi:{USD:{code}},bpi:{USD:{rate}}} =data;
            this.setState({ rate:data.bpi.USD.rate,
                        disclaimer:data.disclaimer,
                        chartName:data.chartName,
                        code:data.bpi.USD.code,
                        display:true})
            // this.setState({ rate:rate,
            //             disclaimer:disclaimer,
            //             chartName:chartName,
            //             code:code,
            //             display:true})
      }).catch((Error) => console.log(Error));
    }

  }

  render() {
    return (
      <div className="App">
          <button type="text" onClick={this.handleClick}> display data </button>
            {(this.state.display)?
                <div>
                  <div> {this.state.disclaimer} </div>
                  <div> Chart: {this.state.chartName}</div>
                  <div> Rate: {this.state.rate}</div>
                  <div> Code: {this.state.code} </div>
                </div>
              : null}
      </div>
    );
  }
}

export default App;
