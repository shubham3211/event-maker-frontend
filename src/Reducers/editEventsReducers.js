import { EDIT } from '../constants/';

const initialState = {
  loading: false,
  error: '',
  id: null,
  name: null,
  imageUrl: null,
  location: null
}

const editEventsReducer = (state = initialState, action) => {
  switch(action.type){
    case EDIT.EDIT_EVENT: return {
      ...state,
      error: '',
      loading: true,
      name: action.payload.name,
      imageUrl: action.payload.imageUrl,
      location: action.payload.location,
      id: action.payload.id
    }
    case EDIT.EDIT_EVENT_SUCCESS: return {
      ...state,
      error: '',
      loading: false,
      name: null,
      imageUrl: null,
      location: null,
      id: null
    }
    case EDIT.EDIT_EVENT_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      name: null,
      imageUrl: null,
      location: null,
      id: null
    }
    default: return state
  }
}

export { editEventsReducer }