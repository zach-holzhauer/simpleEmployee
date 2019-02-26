import {spawn, call} from "redux-saga/effects"
import {helloSaga} from "./helloSaga";

const sagas = [
  helloSaga
];

function* rootSaga() {
  yield sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  );
}

export default rootSaga;
