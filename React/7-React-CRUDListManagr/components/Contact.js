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
        console.log(e.target.name,this.props.contact);

        this.props.triggerParentContactUpdate(e.target.name,this.props.contact);
    }

    handleEditAction(e) {
        console.log(ReactDOM.findDOMNode(this.refs.name).value);
        console.log(ReactDOM.findDOMNode(this.refs.email).value);
        console.log(ReactDOM.findDOMNode(this.refs.phone).value);
        console.log(e.target.name,this.props.contact);

        var newCont= {
            name: ReactDOM.findDOMNode(this.refs.name).value,
            phoneNo:ReactDOM.findDOMNode(this.refs.phone).value ,
            emailId: ReactDOM.findDOMNode(this.refs.email).value,
        }

        newCont.contactId=(e.target.name==='Add')? -1: this.props.contact.contactId;


        this.props.triggerParentContactUpdate(e.target.name,newCont);


    }



    render(){
        let actionButton;
        if(this.props.newContact) {
            actionButton = <Button bsStyle="primary" onClick={this.handleEditAction} name="Add" > Add </Button>

        } else {
            actionButton = <DropdownButton
                bsStyle="primary"
                componentClass={FormGroup.Button}
                id={'dd'+this.props.contact.contactId}
                title="Action">
                <MenuItem bsStyle="info" key="1" name="Update" onClick={this.handleEditAction}>Save changes</MenuItem>
                <MenuItem bsStyle="danger" key="2" name="Remove" onClick={this.handleAction}>Remove</MenuItem>
            </DropdownButton>;
        }

        return(
            <div>
              <Form inline id={'form'+this.props.contact.contactId}>
                <FormGroup>
                    <FormControl defaultValue={this.props.contact.name} ref="name"/>
                    <FormControl defaultValue={this.props.contact.emailId} ref="email"/>
                    <FormControl defaultValue={this.props.contact.phoneNo} ref="phone"/>
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
        name: 'Enter Name',
        phoneNo: '111111111',
        emailId: 'EnterEmail',
        contactId: 100,
    },
    newContact:false
};


