import React from "react";
import {Employee} from "./Employee";
import {connect} from "react-redux";
import {getEmployeeInfo} from "../actions/employeeActions";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeName: '',
            EmployeeID: '',
            Salary: 0,
            Designation: '',
            selectedVal: 0 
        }
        this.selectKey = this.selectKey.bind(this);        
    }
    
    selectKey(e){
        this.setState(
            { selectedVal: e.target.value }
        );
        return this.state.selectedVal;
    }

    render(){
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
                "EmployeeName": 'Roopa S',
                "Salary": 80000,
                "Designation": 'Software Engineer'
            },
            {
                "EmployeeRecID": 5003,
                "EmployeeID": 'Emp1203',
                "EmployeeName": 'Madhu',
                "Salary": 85000,
                "Designation": 'Software Engineer'
            },
            {
                "EmployeeRecID": 5004,
                "EmployeeID": 'Emp1204',
                "EmployeeName": 'Shilpi',
                "Salary": 85000,
                "Designation": 'Project Instructor'
            },
        ]

        var strJsonData = JSON.stringify(jsonData);
        sessionStorage.setItem("EmployeeData", strJsonData);

        return(
            <div>
                <Employee 
                    title={strTitle} 
                    data={jsonData} 
                    showEmployeeInfo={() => this.props.ShowInfo(this.state.selectedVal)} 
                    changeHandler={this.selectKey}
                    EmpId={this.props.EmpID} 
                    EmpName={this.props.EmpName}
                    EmpSalary={this.props.EmpSalary}
                    EmpDesignation={this.props.EmpDesignation}
                /> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        EmpID: state.ID,
        EmpName: state.Name,
        EmpSalary: state.Salary,
        EmpDesignation: state.Designation
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        ShowInfo: (Id) => { 
            dispatch(getEmployeeInfo(Id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);