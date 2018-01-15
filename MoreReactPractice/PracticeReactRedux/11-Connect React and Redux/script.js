import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore} from 'redux';

const initialState = {
    ID: 0,
    Name: "",
    Salary: 0,
    Designation: ""
}

const reducer = (state = initialState, action) => {
    var EmployeeData = JSON.parse(sessionStorage.getItem("EmployeeData"));

    switch(action.type){
        case "EMPLOYEE_INFO":
            //console.log("showing emp info..", action.payload);
            let EmpId = action.payload;
            EmployeeData.map(function(item){
                if(EmpId === item.EmployeeID){
                    state = {
                        ID: item.EmployeeID,
                        Name: item.EmployeeName,
                        Salary: item.Salary,
                        Designation: item.Designation
                    }
                }
            });
            break;
    }
    //console.log(state);
    return state;
}


const store = createStore(reducer);

store.subscribe(() => {
//     console.log("Store updated");
});


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('EmployeeInfo')
);