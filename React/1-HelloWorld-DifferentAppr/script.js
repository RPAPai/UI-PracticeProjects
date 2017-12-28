console.log("My first App --- Obviously Helloooo  World !!!");

import React from 'react';
import ReactDOM from 'react-dom';

//Method 0
// ReactDOM.render(<div> Hellooo World </div>,document.getElementById('container'));
 //ReactDOM.render(" Hi Hello World",document.getElementById('container'));

//Method 1: ES6 react class component
// class Greeting extends React.Component {
//   render() {
//     return (
//       <div> Hello World </div>
//     );
//   }
// }
// ReactDOM.render(<Greeting/>,document.getElementById('container'));

//// Method 2:  variable component - stateless;
// var Element = " Hi there! ";
// ReactDOM.render(Element,document.getElementById("container"));

//// Method 2.1:  variable component - stateless;
// var Element = <div> Hi there ! ! ! </div>;
// ReactDOM.render(Element,document.getElementById("container"));

//// Method 3: Function Component with ES6 way -stateless
// const App = ()=><div> Hi there! </div>;
// ReactDOM.render(<App/>,document.getElementById("container"));

//// Method 4: Function Component with ES6 way -stateless with props
// const App = (n)=><div> Hi there! {this.props.n} </div>;
// ReactDOM.render(<App n="test" />,document.getElementById("container"));

//Method 10: ES6 react class component
// class Greeting extends React.Component {
//   render() {
//     return (
//       <div> Hello {this.props.name} </div>
//     );
//   }
// }
// ReactDOM.render(<Greeting name='World!!'/>,document.getElementById('container'));

// //Method 11: React class with Jsx
// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }
// ReactDOM.render(
//   <Hello toWhat="World !! * !!" />,
//   document.getElementById('container')
// );

// //NOTE: need to iInstall-> npm install create-react-class --save-dev
// //Method 12: ES5 react class component
// var Hello = React.createClass({
// 	render: function(){
// 		return (<h1>  Hellow </h1>);
// 	}
// });
// ReactDOM.render(<Hello/>, document.getElementById('container'));

// Method 13: React component without Jsx
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World !!!!'}, null),
 document.getElementById('container')
);
//
