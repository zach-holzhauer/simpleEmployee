import initialState from '../store/initialState';

const departments = (state = initialState.departments, action) => {
  switch (action.type) {
    case 'SET_DEPARTMENTS':
      return action.departments;
    case 'CLEAR_DEPARTMENTS':
      return initialState.departments;
    default:
      return state;
  }
};

export default departments
