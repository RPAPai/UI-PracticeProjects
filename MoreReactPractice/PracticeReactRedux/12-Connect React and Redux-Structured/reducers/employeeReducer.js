
const employeeReducer = (state = {
    ID: 0,
    Name: "",
    Salary: 0,
    Designation: ""
}, action) => {
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
    return state;
};

export default employeeReducer;