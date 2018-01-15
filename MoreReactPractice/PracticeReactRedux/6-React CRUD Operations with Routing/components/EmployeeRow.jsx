import React from 'react';
import PropTypes from 'prop-types';

export default class EmployeeRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            EmployeeName: '',
            EmployeeID: '',
            Salary: '',
            Designation: ''
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
    }    

    editEmployee(){
        this.setState({
            EmployeeID: this.props.EmployeeID,
            EmployeeName: this.props.EmployeeName,
            Salary: this.props.Salary,
            Designation: this.props.Designation
        });
        this.props.triggerParentUpdate(this.props.EmployeeID);
    }
    removeEmployee(){
        this.props.triggerParentDelete(this.props.EmployeeID);
    }
    render(){
        return (
                <div key={"outer_"+this.props.EmployeeID}>
                    <div className="container" key={"container_"+this.props.EmployeeID}>    
                        <div className="row" key={"row_"+this.props.EmployeeID}>
                            <div key={"ID_"+this.props.EmployeeID} className="col-sm-2 data">{this.props.EmployeeID}</div>
                            <div key={"Name_"+this.props.EmployeeID} className="col-sm-4 data">{this.props.EmployeeName}</div>
                            <div key={"Salary_"+this.props.EmployeeID} className="col-sm-1 data">{this.props.Salary}</div>
                            <div key={"Designation_"+this.props.EmployeeID} className="col-sm-3 data">{this.props.Designation}</div>
                            <button key={"Edit_"+this.props.EmployeeID} onClick={this.editEmployee} className="col-sm-1 btn btn-success btn-action btn-edit data">Edit</button>
                            <button key={"Remove_"+this.props.EmployeeID} onClick={this.removeEmployee} className="col-sm-1 btn btn-danger btn-action btn-remove data">Remove</button>
                        </div>
                    </div>
                </div>
            )
    }
}
// EmployeeRow.propTypes = {
//     EmployeeID: PropTypes.number,
// }
EmployeeRow.defaultProps = {
    title: 'Default Employee Info',
}
EmployeeRow.PropTypes = {
    triggerParentUpdate: PropTypes.func
}

