import React from 'react';
import SignupFormBS from './FormsDemo2.js';
import SignupForm, {FormsDemo} from './FormsDemo.js';

export default class Contents extends React.Component{
  render(){

    return(
      <div className='cnt'>
          <div style={{width:'200px', height:'200px', margin:'auto' marginTop:"120px"}}>
          {/* <FormsDemo/> */}
          <SignupForm/>
          {/* <SignupFormBS/> */}
        </div>
      </div>
    )
  }
}
