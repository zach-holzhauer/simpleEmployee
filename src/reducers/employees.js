import initialState from '../store/initialState';

const employees = (state = initialState.employees, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.employees;
    case 'CLEAR_EMPLOYEES':
      return initialState.employees;
    default:
      return state;
  }
};

export default employees
