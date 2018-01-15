import React from 'react';
import ReactDOM from 'react-dom';
import {MyComponent} from './components/MyComponent';
import {Employee} from './components/Employee';

var strTitle = 'Employee Info';
var jsonData = [
    {
        "EmployeeRecID": 5001,
        "EmployeeID": 'Emp1201',
        "EmployeeName": 'Rajesh kumar',
        "Salary": 50000,
        "Designation": 'IT - Tech Support'
    },
    {
        "EmployeeRecID": 5002,
        "EmployeeID": 'Emp1202',
        "EmployeeName": 'John Doe',
        "Salary": 80000,
        "Designation": 'Software Engineer'
    },
    {
        "EmployeeRecID": 5003,
        "EmployeeID": 'Emp1203',
        "EmployeeName": 'Jane Doe',
        "Salary": 85000,
        "Designation": 'Software Engineer'
    },
    {
        "EmployeeRecID": 5004,
        "EmployeeID": 'Emp1204',
        "EmployeeName": 'Rob Conery',
        "Salary": 85000,
        "Designation": 'Project Instructor'
    },
]

/*

Actually, a super call in the constructor calls the constructor of the parent class. 
You can have access to this independently of using it or not, but in the context of react, 
the properties associated with this, like this.props and this.state are set and configured properly in the 
React.Component class constructor. So that's why you must call super first, so that this is properly setup.

*/

ReactDOM.render(
    <div>
        <MyComponent />
        <Employee title={strTitle} data={jsonData} Sal={25000} /> 
        {/* Sal = "25000" won't work becoz propTypes = number  -- refer to Employee.js file */}
    </div>,
    document.getElementById('EmployeeInfo')
);