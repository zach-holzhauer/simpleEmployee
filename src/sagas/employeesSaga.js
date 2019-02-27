import {
  call,
  put,
  takeEvery
} from  'redux-saga/effects'

import actions from '../actions/';
import apis from '../apis';

export function* fetchEmployees() {
  try {
    yield put(actions.fetchCountActions.increaseFetchCount());
    const resp1 = yield call(apis.employeesApi.getEmployees);
    yield put(actions.employeeActions.setEmployees(resp1.data));
    const resp2 = yield call(apis.departmentsApi.getDepartments);
    yield put(actions.departmentActions.setDepartments(resp2.data));
  } catch(e) {
    console.error('An Error occurred in fetchEmployees Saga', e);
  } finally {
    yield put(actions.fetchCountActions.decreaseFetchCount());
  }

}

export const watchFetchEmployees = [
  takeEvery('FETCH_EMPLOYEES', fetchEmployees)
];
