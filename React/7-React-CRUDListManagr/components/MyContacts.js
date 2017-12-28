import React from 'react';
import Contact from './Contact';

export default class MyContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            myContactList:
                [
                    {
                        name: 'Bob Wick',
                        phoneNo: 8781234557,
                        emailId: 'Bob@kasd.com',
                        contactId: 100
                    },
                    {
                        'name': 'Smith Wick',
                        phoneNo: 1231231234,
                        emailId: 'smith@gmail.com',
                        contactId: 101
                    },
                    {
                        'name': 'Paul Wick',
                        phoneNo: 2312312341,
                        emailId: 'paul@gmail.com',
                        contactId: 102
                    },
                    {
                        name: 'John Wick',
                        phoneNo: 3123123412,
                        emailId: 'john@gmail.com',
                        contactId: 103
                    },
                    {
                        name: 'Harr Wick',
                        phoneNo: 4123123123,
                        emailId: 'harr@gmail.com',
                        contactId: 104
                    }
                ],
        };
        this.UpdateContactList = this.UpdateContactList.bind(this);
    }


    UpdateContactList(action,contactObj) {
        console.log("Action: ",action,"ON object: ",contactObj);
        let tmpList = this.state.myContactList;
        console.log('Action: ',action," - ",contactObj);
        switch (action) {
            case 'Add':
                // Generate new contactId
                // if contacts exists - set newId to be  max of existing ContactId + 1
                // if no contacts set newid to be 100

                let newId=(tmpList.length>0)?tmpList.reduce((x,c)=>((x.contactId>c.contactId)?x.contactId:c.contactId))+1:100;
                contactObj.contactId=newId;

                tmpList.splice(tmpList.length, 0,contactObj);
                this.setState({myContactList: tmpList});
                console.log('Creating Obj :',contactObj);

                break;

            case 'Remove':
                console.log('In Remove case.');
                console.log('Creating Obj :',contactObj);
                if (tmpList.indexOf(contactObj) > -1) {
                    tmpList.splice(tmpList.indexOf(contactObj), 1);
                    this.setState({myContactList: tmpList});
                }
                break;

            case 'Update':
                console.log('In Edit case.');
                let editContact = tmpList.find(
                    (f)=>(f.contactId === contactObj.contactId)
                );
                if(editContact)
                    console.log("DB Contact to edit= ",editContact);
                    else console.log("Contact not Found in DB",editContact);

                if (editContact) {
                    tmpList.splice(tmpList.indexOf(editContact), 1,contactObj);
                    this.setState({myContactList: tmpList});
                }
                break;

            default:
                console.log('Sorry, can not perform ' + action + '.');
        }
    }

    render(){
        let self=this;
        const createLiList1 = this.state.myContactList.map((obj)=>
            <Contact key={obj.contactId} contact={obj} triggerParentContactUpdate={self.UpdateContactList}/>
        );

        return(
            <div>
                <h3> Add New Contact </h3>
                <Contact newContact={true} triggerParentContactUpdate={self.UpdateContactList}/>
                <h3> My Contacts </h3>
                {createLiList1}
            </div>
        )
    }
}

/*
const createLiList1 = this.state.myContactList.map((ob)=>
    <div key={ob.contactId}> {ob.name} </div>
);*/
