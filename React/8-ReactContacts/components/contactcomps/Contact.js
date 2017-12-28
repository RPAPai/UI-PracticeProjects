import React from 'react';
import {Panel, PanelGroup,ButtonToolbar,Label,ButtonGroup,Button,Glyphicon} from 'react-bootstrap';

export default class Contact extends React.Component{
  constructor(){
    super();
    this.updateContact=this.updateContact.bind(this);
  }

  updateContact(event){
    console.log("CNTCT:: I am going to ",event.target.name, " ", this.props.contactData);
    this.props.updateContactList(event.target.name,this.props.contactData);
  }

  render(){
    let contactData = this.props.contactData;
    let pKey="Panel_"+this.props.contactData.contactId;
    let pGKey="PanelGr_"+this.props.contactData.contactId;
    let eKey="Edit_"+this.props.contactData.contactId;
    let dKey="Delete_"+this.props.contactData.contactId;

    //  console.log(contactData);
    return(
      <div>
        <Panel
          bsStyle="danger"
          collapsible
          key={pKey}
          header={contactData.name}
          eventKey={pKey}>

          <Label >{contactData.phoneNo} </Label> &nbsp; <Label> {contactData.emailId}</Label>

          <ButtonGroup key={pGKey} style={{float:'right'}}>

            <a key={eKey} name="edit" role="button" data-toggle="tooltip" title="Edit Contact"
              className={'btn btn-success glyphicon glyphicon-edit'} onClick={this.updateContact}
              > </a>
            <a key={dKey} name="delete" role="button" data-toggle="tooltip" title="Delete Contact"
              className={'btn btn-danger glyphicon glyphicon-trash'} onClick={this.updateContact}
              > </a>

            </ButtonGroup>

          </Panel>
        </div>
      )
    }
  }
  {/* <Button name="delete" key={dKey} onClick={this.updateContact}><Glyphicon name="delete" glyph="trash" /></Button>
  */}
  /* <Panel collapsible header="Panel 1" eventKey="1" expanded={true}>Panel 1 contentadda {btnToolBar}</Panel>
  <Panel collapsible header="Panel 2" eventKey="2">Panel 2 content {btnToolBar} </Panel>
  */

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
