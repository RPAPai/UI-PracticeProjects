import React from 'react';
import ContactList from './ContactList.js';
import ContactForm from './ContactForm.js';
import {myContactsJsonData} from './myContactsJsonData.js';

export default class MyContacts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myContactsData: myContactsJsonData
    }

    this.updateMyContact=this.updateMyContact.bind(this);
  }

  updateMyContact(action,contactObj) {
      console.log('MY CNTCTS :Action: ',action," - ",contactObj);
      let tmpList = this.state.myContactsData;
      console.log();
      switch (action) {
        /*  case 'Add':
              // Generate new contactId
              // if contacts exists - set newId to be  max of existing ContactId + 1
              // if no contacts set newid to be 100

              let newId=(tmpList.length>0)?tmpList.reduce((x,c)=>((x.contactId>c.contactId)?x.contactId:c.contactId))+1:100;
              contactObj.contactId=newId;

              tmpList.splice(tmpList.length, 0,contactObj);
              this.setState({myContactList: tmpList});
              console.log('Creating Obj :',contactObj);

              break;
  */
          case 'delete':
               console.log('Removing Contact :',contactObj);
               if (tmpList.indexOf(contactObj) > -1) {
                   tmpList.splice(tmpList.indexOf(contactObj), 1);
                   this.setState({myContactsData: tmpList});
               }
              break;

      /*    case 'Update':
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
  */
          default:
              console.log('Sorry, can not perform ' + action + '.');
      }
  }



  render(){
    let self=this;
    return(
      <div className='cnt'>

        <h3> New Contact </h3>
        <ContactForm
          newContact={true}
          contactsData={this.state.myContactsData}
          updateMyContact={self.updateMyContact}/>


        <h3> My Contacts </h3>
        <ContactList
          contactsData={this.state.myContactsData}
          updateMyContact={self.updateMyContact}/>
      </div>
      )
    }
  }
