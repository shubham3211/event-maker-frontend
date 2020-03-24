import { fetchEventsApi } from '../api';
import { FETCH } from '../constants'
import { fetchEventsSuccess, fetchEventsFailure } from '../Actions'
import { takeEvery, call, put } from 'redux-saga/effects';

function* handleFetchEvents(){
  try{
    const data = yield call(fetchEventsApi);
    yield put(fetchEventsSuccess(data.events));
  }catch (err){
    yield put(fetchEventsFailure(err.toString()));
  }
}

export default function* watchFetchEvents() {
  yield takeEvery(FETCH.FETCH_EVENT, handleFetchEvents);
}