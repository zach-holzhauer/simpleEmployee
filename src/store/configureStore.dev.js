import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import initialState from "./initialState";

import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState = initialState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        sagaMiddleware
      )
    )
  );
  sagaMiddleware.run((rootSaga));
  return store
};

export default configureStore
