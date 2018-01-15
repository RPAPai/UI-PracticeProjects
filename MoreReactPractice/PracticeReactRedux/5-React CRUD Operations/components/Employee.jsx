import React from 'react';
import EmployeeForm from './EmployeeForm.jsx';
import EmployeeGrid from './EmployeeGrid.jsx';


export default class Employee extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            ShowForm: false,
            IsEditMode: false,
            EmployeeName: '',
            EmployeeID: '', //props.EmployeeID,
            Salary: '', //props.Salary,
            Designation: '', //props.Designation,
            EmployeeData: props.data
        }
        this.getEmployee = this.getEmployee.bind(this);
        this.Save = this.Save.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    getEmployee(id){
        var self = this;
        var data = self.state.EmployeeData;

        data.map(function(item) {
            if(item.EmployeeID === id){
                self.setState({
                    ShowForm: true,
                    IsEditMode: true,
                    EmployeeName: item.EmployeeName,
                    EmployeeID: item.EmployeeID,
                    Salary: item.Salary,
                    Designation: item.Designation,
                })
            }
        });
    }
    
    
    deleteEmployee(id){
        var self = this;
        var data = self.state.EmployeeData;
        var newData = [];
        data.map(function(item){
            if(item.EmployeeID !== id){
                newData.push(item);
            }
        });
        sessionStorage.setItem("EmployeeData", JSON.stringify(newData));
        self.setState({
            EmployeeData: JSON.parse(sessionStorage.getItem("EmployeeData"))
        })
    }
    
    handleTextChange(event){
        if(event.target.id === "txtEmployeeName"){
            this.setState({
                EmployeeName: event.target.value
            });
        }
        
        if(event.target.id === "txtEmployeeSalary"){
            this.setState({
                Salary: event.target.value
            });            
        }
        if(event.target.id === "txtEmployeeDesignation"){
            this.setState({
                Designation: event.target.value
            });
        }
    }
    
    getRunningId(arr, prop) {
        var max;
        for (var i=0 ; i<arr.length ; i++) {
            if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
                max = arr[i];
        }
        return max.EmployeeRecID + 1;
    }
    
    Save() {
        var self = this;
        var data = JSON.parse(sessionStorage.getItem("EmployeeData"));
        var updatedData = [];
        var empObj = {
            EditedEmployeeId: self.state.EmployeeID,
            IsEditMode: self.state.IsEditMode,
            EmployeeName: self.state.EmployeeName.trim(),
            Salary: self.state.Salary.toString().trim(),
            Designation: self.state.Designation.trim()
        }

        if(empObj.EmployeeName === ''){
            alert('Please enter Name');
            return false;
        }
        if(empObj.Salary === ''){
            alert('Please enter Salary');
            return false;
        }
        if(empObj.Designation === ''){
            alert('Please enter Designation');
            return false;
        }
        
        
        if(empObj.IsEditMode) {
            data.map(function(item){
                if(empObj.EditedEmployeeId === item.EmployeeID){
                    item.EmployeeName = empObj.EmployeeName;
                    item.Salary = empObj.Salary;
                    item.Designation = empObj.Designation;
                }
                updatedData.push(item);
            });
        } else {
            var nextEmployeeRecID = this.getRunningId(data, "EmployeeRecID");
            var nextEmployeeID = 'Emp' + nextEmployeeRecID;
            
            var newEmployeeObj = {
                "EmployeeRecID":nextEmployeeRecID,
                "EmployeeID":nextEmployeeID,
                "EmployeeName":empObj.EmployeeName,
                "Salary":empObj.Salary,
                "Designation":empObj.Designation
            }
            data.map(function(item){
                updatedData.push(item);
            });
            updatedData.push(newEmployeeObj);
        }
        
        sessionStorage.setItem("EmployeeData", JSON.stringify(updatedData));
        var parsedJsonData = JSON.parse(sessionStorage.getItem("EmployeeData"));
        self.setState({
            EmployeeData:  parsedJsonData
        }) 
    }

    render(){
        var empListTitle = 'Employee List';
        var empFormTitle = (this.state.IsEditMode) ? "Edit Employee" : "Add New Employee";
        var btnSaveText = (this.state.IsEditMode) ? "Update" : "Save";
        var empData = this.props.data;
        var self = this;
        return(
            <div>
                
                {/*<EmployeeForm title={empFormTitle} name={this.state.EmployeeName} />*/}
                
                <div className="container form">
                    <div className="title">{empFormTitle}</div>
                    <div className="col-sm-12">
                        <div className="field col-sm-4">
                            <div className="col-sm-2">Name</div>
                            <div className="col-sm-4">
                                <input type="text" value={this.state.EmployeeName} 
                                onChange={(event) => this.handleTextChange(event)} 
                                id="txtEmployeeName" />
                            </div>
                        </div>

                        <div className="field col-sm-4">
                            <div className="col-sm-2">Salary</div>
                            <div className="col-sm-4">
                                <input type="text" value={this.state.Salary} 
                                onChange={(event) => this.handleTextChange(event)}
                                id="txtEmployeeSalary" />
                            </div>
                        </div>
                        
                        <div className="field col-sm-4">
                            <div className="col-sm-3">Designation</div>
                            <div className="col-sm-4">
                                <input type="text" value={this.state.Designation} 
                                onChange={(event) => this.handleTextChange(event)}
                                id="txtEmployeeDesignation" />
                            </div>
                        </div>
                        <div className="field btn-field right-align">
                            <button onClick={this.Save} alt={btnSaveText} className="btn btn-success">{btnSaveText}</button>
                        </div>
                    </div>
                </div>
                
                <EmployeeGrid 
                    title = {empListTitle} 
                    data = {this.state.EmployeeData} 
                    edit = {this.getEmployee} 
                    delete = {this.deleteEmployee} />
            </div>
        )
    }
}