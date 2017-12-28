import React from 'react';
import Header from './header.js';
import MyContacts from './contactcomps/MyContacts.js';
//import  '../styles/script.css';

export default class App extends React.Component{
  render(){
    return(
      <div className='cnt'>
         <Header/>
         <MyContacts/>
      </div>
    )
  }
}
