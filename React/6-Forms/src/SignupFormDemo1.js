import React from 'react';
import {formStyle, compStyle} from './FormStyle';

export default class SignupForm1 extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      userName:'',
      email:'',
      password:'',
      confirmPassword:''
    };
    this.handleFieldChange=this.handleFieldChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    console.log("formStyle : ",formStyle);
  }

  handleFieldChange(e) {
   console.log("handleFieldChange: ",e.target);
   this.setState({[e.target.id]:e.target.value});
   console.log(this.state);
   }

  handleSubmit(e){
    console.log("handleSubmit : " )
   console.log(this.state);
   //e.preventDefault();
  }

  render(){
    return(
      <div style={formStyle}>
        <h4> Signup form with  validatation </h4>
       <form id="signupform1"  >
         <div>
               <label> User name: </label>
                <input id="userName"  ref="userName" type="text" placeholder="user name" minLength='5'
                    onChange={this.handleFieldChange} value={this.state.userName}  required  style={compStyle}/><br/>

                <label> Email: </label>
                <input id="email" type="email" ref="email" placeholder="enter email" required
                   onChange={this.handleFieldChange} value={this.state.email}  style={compStyle}/><br/>

                <label> Password: </label>
                <input id="password" type="password" ref="password" placeholder="enter password" minLength='6'
                  onChange={this.handleFieldChange} value={this.state.password} required  style={compStyle}/><br/>

                <label> Confirm password: </label>
                <input id="confirmPassword" type="password" ref="confirmPassword" placeholder="confirm password"  minLength='6'
                 onChange={this.handleFieldChange} value={this.state.confirmPassword}  required  style={compStyle}/><br/><br/>

                 <button  onClick={this.handleSubmit}> Submit </button>

         </div>
       </form>
      </div>
    )
  }
}
