import { deleteEventApi } from '../api';
import { DELETE } from '../constants'
import { deleteEventsSuccess, deleteEventsFailure, fetchEvents } from '../Actions'
import { takeEvery, call, put } from 'redux-saga/effects';

function* handleDeleteEvents(action){
  try{
    yield call(deleteEventApi, action.payload);
    yield put(deleteEventsSuccess());
    yield put(fetchEvents());
  }catch (err){
    yield put(deleteEventsFailure(err.toString()));
  }
}

export default function* watchDeleteEvents() {
  yield takeEvery(DELETE.DELETE_EVENT, handleDeleteEvents);
}