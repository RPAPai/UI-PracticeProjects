import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup,ControlLabel,FormControl,InputGroup,Button,DropdownButton,HelpBlock , MenuItem} from 'react-bootstrap';

export default class MyCourses extends React.Component {
    constructor(props) {
        super(props);
        this.handleAction= this.handleAction.bind(this);
        this.handleEditAction= this.handleEditAction.bind(this);

        this.state={
            editContact:{
                name: 'Enter Name',
                phoneNo: 0,
                emailId: 'EnterEmail',
                contactId: 100,
            },
            editExistingContact:false
        };
    }

    handleAction(e){
        var city = ReactDOM.findDOMNode(this.refs.cityInput).value;
        var phone = ReactDOM.findDOMNode(this.refs.phone).value;
        console.log(city);
        console.log(this.input.value);
        console.log(this.name.value);
    }
    handleEditAction(e) {
        console.log(e.target.name, this.state.editContact);
        console.log(e.target.value);
    }



    // bubbleUpdateContact

    render(){
        let action, actionButton;
        if(this.state.editContact.contactId===100) {
            action="Add"
               actionButton = <Button bsStyle="success" onClick={this.handleAction}> {action} </Button>

        } else {
            action="Action";
            actionButton = <DropdownButton
                componentClass={FormGroup.Button}
                id="input-dropdown-addon"
                title={action}
            >
                <MenuItem key="1" name="Edit" onClick={this.handleEditAction}>Edit</MenuItem>
                <MenuItem key="2" name="Remove" onClick={this.handleAction}>Remove</MenuItem>
            </DropdownButton>;





        }

        return(
            <div>
                <div><h2>My Courses Not implemented yet...</h2> </div>
                <Form inline>
                    <FormGroup>


                        <FormControl
                            componentClass="input"
                            placeholder="Enter recipe title"
                            inputRef={(ref) => {this.input = ref}}
                            defaultValue="title"/>
                        <FormControl defaultValue="ueir" ref="cityInput"/>

                        <FormControl inputRef={(i) => this.name = i} type="text" defaultValue="test name" />
                        <FormControl inputRef={(e) => this.email = e} type="email" defaultValue="fgasgd@ydh.com"/>
                        <FormControl  type="tel" defaultValue={this.state.editContact.phoneNo} ref="phone"/>
                        {actionButton}
                    </FormGroup>
                </Form>

            </div>
        )
    }
}
