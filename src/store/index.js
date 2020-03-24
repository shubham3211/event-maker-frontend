import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { FETCH, CREATE, DELETE, EDIT } from '../constants'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
