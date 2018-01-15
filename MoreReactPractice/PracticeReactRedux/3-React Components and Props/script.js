import React from 'react';
import ReactDOM from 'react-dom';
import {MyComponent} from './components/MyComponent';
import {Employee} from './components/Employee';

var strTitle = 'Employee Info';
var jsonData = {
    "EmployeeRecID": 5001,
    "EmployeeID": 'Emp1201',
    "EmployeeName": 'Rajesh kumar',
    "Salary": 50000,
    "Designation": 'IT - Tech Support '
}
ReactDOM.render(
    <div>
        <MyComponent />
        <Employee title={strTitle} data={jsonData} Sal={25000} />
        {/* Sal = "25000" won't work becoz propTypes = number  -- refer to Employee.js file */}
    </div>,
    document.getElementById('EmployeeInfo')
);