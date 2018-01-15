import React from 'react';
import PropTypes from 'prop-types';

export class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            EmployeeName: '',
            EmployeeID: '',
            Salary: 0,
            Designation: '',
            selectedVal: 0
        };
        this.showEmployeeInfo = this.showEmployeeInfo.bind(this);
        this.selectKey = this.selectKey.bind(this);
    }

    showEmployeeInfo() {
        var options = this.props.data;
        var selectedVal = this.state.selectedVal;
        var self = this;
        options.map(function(item) {
            if (selectedVal === item.EmployeeID) {
                self.setState({
                    EmployeeName: item.EmployeeName,
                    EmployeeID: item.EmployeeID,
                    Salary: item.Salary,
                    Designation: item.Designation
                })
            }
        })
    }
    selectKey(e) {
        console.log(e.target.value);
        this.setState({ selectedVal: e.target.value }
            //() => console.log(this.state.selectedVal)
        );
        //console.log(this.state.selectedVal);
    }

    render() {
        var items = this.props.data;

        return (
            <div>
                <h2 > { this.props.title } </h2>
                    <div > ID: { this.state.EmployeeID } </div>
                    <div > Name: { this.state.EmployeeName } </div>
                    <div > Salary: { this.state.Salary } </div>
                    <div> Designation: { this.state.Designation } </div><br />
                <div> Props Sal: { this.props.Sal } </div>
                    <select onChange = { this.selectKey }>
                    {
                        items.map(function(item) {
                            return <option key = { item.EmployeeRecID }
                            value = { item.EmployeeID } > { item.EmployeeName } </option>
                        })
                    }
                    </select><br /> < br />
                    <button onClick = { this.showEmployeeInfo } > Show Info </button>
            </div>
        )
    }
}
Employee.propTypes = {
    EmployeeID: PropTypes.number,
    Sal: PropTypes.number
}
Employee.defaultProps = {
    title: 'Default Employee Info'
}
