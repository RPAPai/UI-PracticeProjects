import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import SignupForm1 from './SignupFormDemo1';   // Signup Form with default validation

import SignupFormBS from './SignupFormBSDemo';  //  // Signup Form(bootstrap) with  validation
import SignupFormBS1 from './SignupFormBSDemo1'; // signup form Bootstrap try validation (temp)

export default class App extends React.Component{
    render(){
        return(
    <BrowserRouter>
        <div>
            <ul style={{ listStyleType: 'none' }}>
                <li><Link to="/"><b>Signup Form1</b></Link></li>

                <li><Link to="/SignupFormBS">Signup Form BS</Link></li>
                <li><Link to="/SignupFormBS1">Signup Form BS 1</Link></li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={SignupForm1}/>

                <Route path="/SignupFormBS" component={SignupFormBS}/>
                <Route path="/SignupFormBS1" component={SignupFormBS1}/>
                <Route render={() => <div>404 Error!!!</div>}/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}
}
