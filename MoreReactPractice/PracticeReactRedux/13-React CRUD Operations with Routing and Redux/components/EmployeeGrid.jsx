import React from 'react';
import EmployeeRow from './EmployeeRow.jsx';
import EmployeeForm from './EmployeeForm.jsx';
import PropTypes from 'prop-types';

export default class EmployeeGrid extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            EmployeeName: '', //props.EmployeeName,
            EmployeeID: '', //props.EmployeeID,
            Salary: '', //props.Salary,
            Designation: '', //props.Designation,
            EmployeeData:''
        }
        this.onEditName = this.onEditName.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    
    onEditName(id){
        var self = this;
        var data = self.props.data;
        
        data.map(function(item){
            if(item.EmployeeID === id){
                self.setState({
                    EmployeeName: item.EmployeeName,
                    EmployeeID: item.EmployeeID,
                    Salary: item.Salary,
                    Designation: item.Designation,
                })
            }
        });
        this.props.edit(id);
    }
    onDelete(id){
        var self = this;
        var data = self.props.data;
        var newData = [];
        data.map(function(item){
            if(item.EmployeeID !== id){
                newData.push(item);
            }
        });
        this.props.delete(id);
    }


    render(){        
        var self = this;
        var items = this.props.data;

        return (
            <div>
                <div className="container">
                    <div className="title">{this.props.title}</div>
                    <div className="row panel-info">
                        <div className="col-sm-2 panel-heading">ID</div>
                        <div className="col-sm-4 panel-heading">Name</div>
                        <div className="col-sm-1 panel-heading">Salary</div>
                        <div className="col-sm-4 panel-heading">Designation</div>
                        <div className="col-sm-1 panel-heading">Actions</div>
                    </div>
                </div>
                {
                    items.map(function(employee){
                        return <EmployeeRow key={employee.EmployeeID}
                                EmployeeID={employee.EmployeeID} EmployeeName={employee.EmployeeName} 
                                Salary={employee.Salary} Designation={employee.Designation} 
                                triggerParentUpdate={self.onEditName} 
                                triggerParentDelete={self.onDelete}/>
                    })
                }
            </div>
        )
    }
}
EmployeeGrid.PropTypes = {
    edit: PropTypes.func
}