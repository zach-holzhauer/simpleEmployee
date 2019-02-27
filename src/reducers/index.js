import { combineReducers } from 'redux'
import employees from './employees';
import selectedEmployee from './selectedEmployee';
import fetchCount from './fetchCount';
import departments from './departments';

const rootReducer = combineReducers({
  employees,
  selectedEmployee,
  departments,
  fetchCount
});

export default rootReducer
