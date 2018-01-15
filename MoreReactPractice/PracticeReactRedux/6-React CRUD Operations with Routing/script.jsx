import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';
import {Learn} from './components/Learn.jsx';
import {Home} from './components/Home';
import {Header} from './components/Header.jsx';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class RootApp extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/Learn" component={Learn} />
                    <Route path="/App" component={App} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <div>
        <RootApp />
    </div>,
    document.getElementById('EmployeeInfo')
);
