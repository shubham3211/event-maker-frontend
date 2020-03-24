import { editEventApi } from '../api';
import { EDIT } from '../constants'
import { editEventsSuccess, editEventsFailure, fetchEvents } from '../Actions'
import { takeEvery, select, call, put } from 'redux-saga/effects';

function* handleEditEvent(action){
  console.log('action.payload', action.payload)
  try{
    yield call(editEventApi, action.payload);
    yield put(editEventsSuccess());
    yield put(fetchEvents());
  }catch (err){
    yield put(editEventsFailure(err.toString()));
  }
}

export default function* watchCreateEvents() {
  yield takeEvery(EDIT.EDIT_EVENT, handleEditEvent);
}