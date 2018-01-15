export function getEmployeeInfo(EmployeeId){
    return {
        type: "EMPLOYEE_INFO",
        payload: EmployeeId
    }
}