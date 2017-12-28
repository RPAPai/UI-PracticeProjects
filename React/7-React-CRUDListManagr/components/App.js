import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Grid,ButtonToolbar, Button } from 'react-bootstrap';
import MyContacts from './MyContacts';
import MyCourses from './MyCourses';

//const MyCourses = () => ( <div><h2> LIst of my Courses coming up soon... </h2> </div>);
const MySongs = () => ( <div><h2>List of my fav songs coming up soon...</h2> </div>);
const MyWallet = () => ( <div><h2>Wallet Not implemented yet...</h2> </div>);

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div container >
                    <ButtonToolbar style={{background:'black'}}>
                        <Button bsStyle="success"><Link to="/">My Contacts</Link></Button>
                        <Button bsStyle="success"><Link to="/mycourses">My Courses</Link></Button>
                        <Button bsStyle="success"><Link to="/mysongs">My Songs</Link></Button>
                        <Button bsStyle="success"><Link to="/mywallet">My Wallet</Link></Button>
                    </ButtonToolbar>
                  <hr/>
                    <Switch>
                        <Route exact path="/" component={MyContacts}/>
                        <Route path="/mycourses" component={MyCourses}/>
                        <Route path="/mysongs" component={MySongs}/>
                        <Route path="/mywallet" component={MyWallet}/>
                        <Route render={() => <div>404 Error!!!</div>}/>
                    </Switch>




                </div>
            </BrowserRouter>


        )
    }
}


