import {all} from 'redux-saga/effects'
import {
  watchFetchEmployees
} from './employeesSaga'

function* rootSaga() {
  yield all([
      ...watchFetchEmployees
  ]);
}

export default rootSaga;
