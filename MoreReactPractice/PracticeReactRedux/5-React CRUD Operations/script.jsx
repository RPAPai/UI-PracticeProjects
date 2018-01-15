import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Employee from './components/Employee.jsx';
import {Router, Route, browserHistory} from 'react-router';
//import Data from './components/EmployeeData.json';
//var Data = require('./components/EmployeeData.json');

//import {Root} from './components/Root';
//import {Home} from './components/Home';

// export default class App extends React.Component{
//     render(){
//         return(
//             {/*<Router history={browserHistory}>
//                 <Route path="home" component={Home} />
//             </Router>*/}
//         );
//     }
// }

var jsonData = [
    {
        "EmployeeRecID": 5101,
        "EmployeeID": "Emp5101",
        "EmployeeName": "Rajesh kumar",
        "Salary": 50000,
        "Designation": "IT - Tech Support"
    },
    {
        "EmployeeRecID": 5102,
        "EmployeeID": "Emp5102",
        "EmployeeName": "John Doe",
        "Salary": 80000,
        "Designation": "Software Engineer"
    },
    {
        "EmployeeRecID": 5103,
        "EmployeeID": "Emp5103",
        "EmployeeName": "Jane Doe",
        "Salary": 85000,
        "Designation": "Software Engineer"
    },
    {
        "EmployeeRecID": 5104,
        "EmployeeID": "Emp5104",
        "EmployeeName": "Rob Conery",
        "Salary": 85000,
        "Designation": "Project Instructor"
    }
];

var strJsonData = JSON.stringify(jsonData);
var parsedJsonData = "";
var EmployeeData = JSON.parse(sessionStorage.getItem("EmployeeData"));
if(!EmployeeData){
    sessionStorage.setItem("EmployeeData", strJsonData);
}
if(EmployeeData) {
    if(EmployeeData.length) {
        parsedJsonData = JSON.parse(sessionStorage.getItem("EmployeeData"));
    }else{
        sessionStorage.setItem("EmployeeData", strJsonData);
    }
}

/*
Actually, a super call in the constructor calls the constructor of the parent class. 
You can have access to this independently of using it or not, but in the context of react, 
the properties associated with this, like this.props and this.state are set and configured properly in the 
React.Component class constructor. So that's why you must call super first, so that this is properly setup.
*/

ReactDOM.render(
    <div>
        <Header />
        <Employee data={parsedJsonData} />
    </div>,
    document.getElementById('EmployeeInfo')
);