import { CREATE } from '../constants/';

const initialState = {
  loading: false,
  error: '',
  name: null,
  imageUrl: null,
  location: null
}

const createEventsReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATE.CREATE_EVENT: return {
      ...state,
      error: '',
      loading: true,
      name: action.payload.name,
      imageUrl: action.payload.imageUrl,
      location: action.payload.location
    }
    case CREATE.CREATE_EVENT_SUCCESS: return {
      ...state,
      error: '',
      loading: false,
      name: null,
      imageUrl: null,
      location: null
    }
    case CREATE.CREATE_EVENT_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      name: null,
      imageUrl: null,
      location: null
    }
    default: return state
  }
}

export { createEventsReducer }