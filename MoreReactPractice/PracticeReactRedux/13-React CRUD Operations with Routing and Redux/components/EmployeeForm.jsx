import React from 'react';
//import EmployeeRow from './EmployeeRow.jsx';
//import EmployeeGrid from './EmployeeGrid.jsx';

export default class EmployeeForm extends React.Component{
    constructor(props) {
        super(props);
         this.state = {
             ShowForm: false,
             EmployeeName: props.name,
             EmployeeID: "", //props.id,
             Salary: "", //props.salary,
             Designation: "", //props.designation,
        }
        this.Save = this.Save.bind(this);
    }
    componentWillMount(){
        console.log('component will mount..');
    }

    render(){
        return(
            
            <div className="container form">
                <div className="title">{this.props.title}</div>
                <div className="col-sm-12">
                    <div className="field col-sm-4">
                        <div className="col-sm-2">Name</div>
                        <div className="col-sm-4">
                            <input type="text" defaultValue={this.state.EmployeeName} 
                            onChange={(event) => this.handleTextChange(event)} 
                            id="txtEmployeeName" />
                        </div>
                    </div>

                    <div className="field col-sm-4">
                        <div className="col-sm-2">Salary</div>
                        <div className="col-sm-4">
                            <input type="text" defaultValue={this.state.Salary} 
                            onChange={(event) => this.handleTextChange(event)}
                            id="txtEmployeeSalary" />
                        </div>
                    </div>
                    
                    <div className="field col-sm-4">
                        <div className="col-sm-3">Designation</div>
                        <div className="col-sm-4">
                            <input type="text" defaultValue={this.state.Designation} 
                            onChange={(event) => this.handleTextChange(event)}
                            id="txtEmployeeDesignation" />
                        </div>
                    </div>
                    <div className="field btn-field right-align">
                        <button onClick={this.Save} className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}