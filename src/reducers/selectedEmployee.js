import initialState from '../store/initialState';

const selectedEmployee = (state = initialState.selectedEmployee, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      return action.selectedEmployee;
    case 'CLEAR_EMPLOYEE':
      return initialState.selectedEmployee;
    default:
      return state;
  }
};

export default selectedEmployee
