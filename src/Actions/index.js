import { EDIT, DELETE, CREATE, FETCH } from '../constants';

const fetchEvents = () => ({
  type: FETCH.FETCH_EVENT
})

const fetchEventsSuccess = (events) => ({
  type: FETCH.FETCH_EVENT_SUCCESS,
  payload: events
})

const fetchEventsFailure = () => ({
  type: FETCH.FETCH_EVENT_FAILURE
})

const createEvents = ({name, imageUrl, location}) => ({
  type: CREATE.CREATE_EVENT,
  payload: {
    name, 
    imageUrl,
    location
  }
})

const createEventsFailure = ({error}) => ({
  type: CREATE.CREATE_EVENT_FAILURE,
  error
})

const createEventsSuccess = () => ({
  type: CREATE.CREATE_EVENT_SUCCESS,
})

const editEvents = ({id, name, imageUrl, location}) => {
  console.log('id in here', id)
  return {
    type: EDIT.EDIT_EVENT,
    payload: {
      id,
      name, 
      imageUrl,
      location
    }
  }
} 

const editEventsFailure = ({error}) => ({
  type: EDIT.EDIT_EVENT_FAILURE,
  error
})

const editEventsSuccess = () => ({
  type: EDIT.EDIT_EVENT_SUCCESS
})

const deleteEvents = ({id}) => ({
  type: DELETE.DELETE_EVENT,
  payload: {
    id
  }
})

const deleteEventsSuccess = () => ({
  type: DELETE.DELETE_EVENT_SUCCESS
})

const deleteEventsFailure = () => ({
  type: DELETE.DELETE_EVENT_FAILURE
})

export { 
  fetchEvents,
  fetchEventsSuccess,
  fetchEventsFailure,
  createEvents,
  createEventsSuccess,
  createEventsFailure,
  editEvents,
  editEventsSuccess,
  editEventsFailure,
  deleteEvents,
  deleteEventsSuccess,
  deleteEventsFailure
};