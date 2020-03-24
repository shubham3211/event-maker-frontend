import { DELETE } from '../constants/';

const initialState = {
  loading: false,
  error: '',
  id: null
}

const deleteEventsReducer = (state = initialState, action) => {
  switch(action.type){
    case DELETE.DELETE_EVENT: return {
      ...state,
      error: '',
      loading: true,
      id: action.payload
    }
    case DELETE.DELETE_EVENT_SUCCESS: return {
      ...state,
      error: '',
      loading: false,
      id: null
    }
    case DELETE.DELETE_EVENT_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      id: null
    }
    default: return state
  }
}

export { deleteEventsReducer }