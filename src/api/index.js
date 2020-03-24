import axios from 'axios';

const URL = 'http://localhost:5000';

const fetchEventsApi = async() => {
  const response = await axios.get(`${URL}/events`);
  
  if(response.status>=400){
    throw new Error('Error occured');
  }
  return response.data;
}

const editEventApi = async({id, name, imageUrl, location}) => {
  const response = await axios({
    method: 'PUT',
    url: `${URL}/events/${id}`,
    data: {
      id,
      name,
      imageUrl,
      location
    }
  })

  if(response.status>=400){
    throw new Error('error occured');
  }
  
  return response.message;
}

const deleteEventApi = async({id}) => {
  const response = await axios({
    method: 'PUT',
    url: `${URL}/delete-event/${id}`,
    data: {
      id
    }
  })

  if(response.status>=400){
    throw new Error('error occured');
  }

  return response.message;
}

const createEventApi = async({name, imageUrl, location}) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/add-event`,
    data: {
      name,
      imageUrl,
      location
    }
  })
  if(response.status>=400){
    throw new Error('error occured');
  }

  return response.message;
}

export { fetchEventsApi, editEventApi, deleteEventApi, createEventApi }