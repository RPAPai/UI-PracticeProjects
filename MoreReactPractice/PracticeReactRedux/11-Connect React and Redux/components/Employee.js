import React from 'react';
import PropTypes from 'prop-types';

export class Employee extends React.Component {
    render() {
        var items = this.props.data;
        return ( 
			<div className = "container" >
            <h4> </h4> <div className = "col-sm-2" >  
			<select className = "form-control" onChange = { this.props.changeHandler } > {
                items.map(function(item) {
                    return <option key = { item.EmployeeRecID }
                    value = { item.EmployeeID } > { item.EmployeeName } </option>
                })
            } </select> </div> 
			<button type = "button"
            className = "btn btn-info"
            data-toggle = "modal"
            data-target = "#myModal"
            onClick = { this.props.showEmployeeInfo } > Show Info </button>

            <div className = "modal fade" id = "myModal" role = "dialog" >
            <div className = "modal-dialog" >
            <div className = "modal-content" >
            <div className = "modal-header" >
            <button type = "button" className = "close" data-dismiss = "modal" > &times; </button>
			<h4 className = "modal-title" > { this.props.title } </h4>
			</div> <div className = "modal-body">
            <div> ID: { this.props.EmpId } </div>
			<div> Name: { this.props.EmpName } </div>
			<div> Salary: { this.props.EmpSalary } </div>
			<div> Designation: { this.props.EmpDesignation } </div><br />
            </div> <div className = "modal-footer">
            <button type = "button"
            className = "btn btn-default" data-dismiss="modal" > Close </button>
			</div> </div> </div> </div> </div>
        );
    }
}
Employee.propTypes = {
    EmployeeID: PropTypes.number,
    Sal: PropTypes.number
}
Employee.defaultProps = {
    title: 'Default Employee Info'
}