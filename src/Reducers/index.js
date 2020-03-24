import {createEventsReducer} from './createEventsReducer'
import {deleteEventsReducer} from './deleteEventsReducer'
import {editEventsReducer} from './editEventsReducers'
import {fetchEventsReducer} from './fetchEventsReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  createEvents: createEventsReducer,
  deleteEvents: deleteEventsReducer,
  editEvents: editEventsReducer,
  events: fetchEventsReducer
})

export default rootReducer;