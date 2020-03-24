import { FETCH } from '../constants'

const initialState = {
  loading: false,
  error: '',
  events: null
}

const fetchEventsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH.FETCH_EVENT: return {
      ...state,
      loading: true,
      error: '',
      events: null
    }
    case FETCH.FETCH_EVENT_SUCCESS: return {
      ...state,
      loading: false,
      error: '',
      events: action.payload
    }
    case FETCH.FETCH_EVENT_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      events: null
    }
    default: return state
  }
}

export { fetchEventsReducer };