import React from 'react';
import {Header} from './Header.jsx';
import {Employee} from './Employee.jsx';
//import {Router, Route, browserHistory} from 'react-router';


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
        "EmployeeName": "Roopa S",
        "Salary": 80000,
        "Designation": "Software Engineer"
    },
    {
        "EmployeeRecID": 5103,
        "EmployeeID": "Emp5103",
        "EmployeeName": "Madhu",
        "Salary": 85000,
        "Designation": "Software Engineer"
    },
    {
        "EmployeeRecID": 5104,
        "EmployeeID": "Emp5104",
        "EmployeeName": "Shilpi",
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


export class App extends React.Component {
    render(){
        return (
            <div>
                <Employee data={parsedJsonData} />
            </div>
        );
    }    
};

 