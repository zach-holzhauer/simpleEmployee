export const setEmployees = employees => ({
    type: 'SET_EMPLOYEES',
    employees
});

export const setEmployee = selectedEmployee => ({
  type: 'SET_EMPLOYEE', selectedEmployee
});

export const clearEmployees = () => ({
  type: 'CLEAR_EMPLOYEES'
});

export const clearEmployee = () => ({
  type: 'CLEAR_EMPLOYEE'
});


export const fetchEmployeesAction = () => ({
  type: 'FETCH_EMPLOYEES'
});
