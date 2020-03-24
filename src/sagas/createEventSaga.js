import { createEventApi } from '../api';
import { CREATE } from '../constants'
import { createEventsSuccess, createEventsFailure, fetchEvents } from '../Actions'
import { takeEvery, select, call, put } from 'redux-saga/effects';

function* handleCreateEvent(action){
  try{
    yield call(createEventApi, action.payload);
    yield put(createEventsSuccess());
    yield put(fetchEvents());
  }catch (err){
    yield put(createEventsFailure(err.toString()));
  }
}

export default function* watchCreateEvents() {
  yield takeEvery(CREATE.CREATE_EVENT, handleCreateEvent);
}