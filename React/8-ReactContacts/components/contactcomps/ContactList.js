import React from 'react';
import Contact from './Contact.js';
import {Accordion,Row,Panel, PanelGroup,ButtonToolbar,ButtonGroup,Button,Glyphicon} from 'react-bootstrap';

export default class ContactList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactsData:props.contactsData
    }
    this.updateContactList=this.updateContactList.bind(this);
  }

  updateContactList(action,contactObj) {
    console.log('CNTCT LIST', action,' ',contactObj);
    this.props.updateMyContact(action,contactObj);

  }

  render(){
    let self=this;
    const contactPanels = this.state.contactsData.map(
      (contact) => <Contact
        key={contact.contactId}
        contactData={contact}
        updateContactList={self.updateContactList}
      />
    );

    return(
      <div style={{background:"black"}} className="container">
        <Accordion>
          {contactPanels}
        </Accordion>
      </div>
    )

  }
}


//   render(){
//     self=this;
//     const contacts =
//           this.myContactList.map((contact) => <Contact
//             key={contact.contactId};
//             contactData={contact}
//             />);
//
//     return(
//       <Row>
//         <PanelGroup>
//           {contacts}
//         </PanelGroup>
//       </Row>
//     )
//   }
// }



// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );
