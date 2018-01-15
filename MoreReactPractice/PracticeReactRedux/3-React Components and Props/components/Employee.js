import React from 'react';
import PropTypes from 'prop-types';

export class Employee extends React.Component{
    render(){
        return <div>
            <h2>{this.props.title }</h2>
            <div>ID: {this.props.data.EmployeeID}</div>
            <div>Name: {this.props.data.EmployeeName}</div>
            <div>Salary: {this.props.data.Salary}</div>
            <div>Designation: {this.props.data.Designation}</div>
            <div>Sal: {this.props.Sal}</div>
        </div>
    }
}
Employee.propTypes = {
    EmployeeRecID: PropTypes.number,
    Sal: PropTypes.number
}
Employee.defaultProps = {
    title: 'Default Employee Info'
}