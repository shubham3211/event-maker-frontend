import { all } from 'redux-saga/effects';
import fetchEventsSaga from './fetchEventSaga'
import createEventSaga from './createEventSaga'
import deleteEventSaga from './deleteEventSaga'
import editEventSaga from './editEventSaga'

export default function* rootSaga(){
  yield all([fetchEventsSaga(), createEventSaga(), deleteEventSaga(), editEventSaga()])
}