console.log("My first App --- Obviously Helloooo  World !!!");
import React from 'react';
import ReactDOM from 'react-dom';

//const App = ()={<div> Hi there </div>};
ReactDOM.render("<div> Hi ther </div>",document.getElementById("container"));




//Method 1
// ReactDOM.render(<div> I am react app output </div>,document.getElementById('container'));

//Method 2 Variable comps - Stateless variable comps
// var Element = <div>I am react app output</div>;
//  ReactDOM.render(Element,document.getElementById('container'));

// Method 3 Function comps -stateless variable comps
 // function Element () {
 //   return <div> TESTING... </div>;
 // }
 // ReactDOM.render(<Element/>,document.getElementById('container'));

// Method 4  Function comps -stateless variable comps
// const App= () => ( <div> TESTING... </div>);
// ReactDOM.render(<App/>,document.getElementById('container'));

// Method 5  Function comps -stateless variable comps
// const App= (props) => ( <div> Hello {props.name} ... </div>);
// ReactDOM.render(<App name="Roopa"/>, document.getElementById('container'));

// Method 6  Function comps -stateless variable comps
 // const App= props =>  <div> Hello {props.fname} {props.lname}... </div>;
 // ReactDOM.render(<App fname="Roopa" lname="Pai"/>, document.getElementById('container'));

// Method 7  Function comps -stateless variable comps
 // const App= ({fname,lname}) =>  <div> Helloooo {fname} {lname}... </div>;
 // ReactDOM.render(<App fname="Roopa" lname="Pai"/>, document.getElementById('container'));

 // Method 8  Function comps -stateless variable comps
  // const App= ({fname,lname}) =>  <div> Helloooo {fname} {lname}... </div>;
  // ReactDOM.render(<App fname="Roopa" lname="Pai"/>, document.getElementById('container'));

 // Method 9  Function comps -stateless variable comps
 // function Welcome(props) {
 //   return <h1>Hello, {props.name}</h1>;
 // }
 // const element = <Welcome name="Sara" />;
 // ReactDOM.render(element, document.getElementById('container'));


//Method 10  react comps - staeful comp and has life cycle methods
// class Profile extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.name}</h1>
//         <p>
//           {this.props.bio}
//         </p>
//       </div>
//     );
//   }
// }
//  ReactDOM.render(<Profile name="roopa" bio="something"/>,document.getElementById('container'));

//Method 11  react classes - staeful comp and has life cycle methods
/*
export default class Element extends React.Component {
 render () {
    return (
      <div> Hello {this.props.name} </div>
    );
 }
}

// Bundle in a stateless comp and then render
const App= <div>
              <Element  name="RoopaPai"/>
          </div>;
//ReactDOM.render(App, document.getElementById('container'));

//OR directly render container comp
ReactDOM.render(<Element name="RoopaPai"/>, document.getElementById('container'));
*/
