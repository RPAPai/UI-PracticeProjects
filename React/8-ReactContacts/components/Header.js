import React from 'react';
// export default class Header extends React.Component{
//   render(){
//
//     return(
//         <div> Test </div>
//     )
//   }
// }

import {Navbar, Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(){
      super();
      this.handleSelect=this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
            console.log('selected ' + selectedKey);
          }

    render() {
        return (

          <Nav style={{background:'black'}} bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">MyContacts</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
        )
    }

}





















// import {Nav, NavItem} from 'react-bootstrap'
// export default class Header extends React.Component{
//   render(){
//     function handleSelect(selectedKey) {
//       alert('selected ' + selectedKey);
//     }
//
//     return(
//       <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
//         <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
//         <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
//         <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
//       </Nav>
//     )
//   }
// }
