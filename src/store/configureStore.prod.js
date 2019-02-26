import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import initialState from "./initialState";

import rootSaga from "../sagas/";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState = initialState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store
};

export default configureStore
