import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup,ControlLabel,FormControl,InputGroup,Button,DropdownButton,HelpBlock , MenuItem} from 'react-bootstrap';


export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.handleAction= this.handleAction.bind(this);
      this.handleEditAction= this.handleEditAction.bind(this);
    }
    // Remove
    handleAction(e){
      // console.log(e.target.name,this.props.contact);
      // this.props.triggerParentContactUpdate(e.target.name,this.props.contact);
    }

    handleEditAction(e) {
      console.log(e.target.name,this.props.contact);

      console.log(ReactDOM.findDOMNode(this.refs.name).value);
      console.log(ReactDOM.findDOMNode(this.refs.email).value);
      console.log(ReactDOM.findDOMNode(this.refs.phone).value);
      console.log(e.target.name,this.props.contact);

      //
      // var newCont= {
      //     name: ReactDOM.findDOMNode(this.refs.name).value,
      //     phoneNo:ReactDOM.findDOMNode(this.refs.phone).value ,
      //     emailId: ReactDOM.findDOMNode(this.refs.email).value,
      // }
      //
      // newCont.contactId=(e.target.name==='Add')? -1: this.props.contact.contactId;
      //
      //
      // this.props.triggerParentContactUpdate(e.target.name,newCont);
    }

  render(){
  //  let contactData = this.props.contactData;
    let ctId = this.props.contact.contactId
    let actionButton;


    if(this.props.newContact) {
      actionButton = <Button
        type="submit"
        bsStyle="success"
        name="Add"
        key={"FormSbmt_"+ctId}> Add </Button>

      } else {
        actionButton = <DropdownButton
          bsStyle="primary"
          componentClass={FormGroup.Button}
          id={'dd'+this.props.contact.contactId}
          title="Action">
          <MenuItem bsStyle="info" key="1" name="Update" onClick={this.handleEditAction}>Save changes</MenuItem>
          {/* <MenuItem bsStyle="danger" key="2" name="Remove" onClick={this.handleAction}>Remove</MenuItem> */}
        </DropdownButton>;
      }


    return(
      <div style={{background:"black"}} className="container">
        <Form inline id={"form"+this.props.contact.contactId} key={"Form_"+ctId}>
        {/* <Form inline id={"form"+this.props.contact.contactId} key={"Form_"+ctId} onSubmit={this.handleEditAction}> */}
          <FormGroup  key={"FormGrp_"+ctId}>

            <FormControl
              required
              type="text"
              placeholder=" Enter Name"
              defaultValue={this.props.contact.name}
              key={"FormCtrl_Name_"+ctId}
              ref="name"
            />

            <FormControl
              type="email"
              placeholder=" Enter Email"
              defaultValue={this.props.contact.emailId}
              key={"FormCtrl_Eml_"+ctId}
              ref="email"
            />

              <FormControl
                required
                type="phone"
                placeholder=" Enter Phone"
                defaultValue={this.props.contact.phoneNo}
                key={"FormCtrl_Ph_"+ctId}
                ref="phone"
                />

              {actionButton}
            </FormGroup>
          </Form>
        </div>
      )
    }
  }

  // Specifies the default values for props:
  Contact.defaultProps = {
    contact:{
      name: '',
      phoneNo: '',
      emailId: '',
      contactId: 100,
    },
    newContact:true
  };
