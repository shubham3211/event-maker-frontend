import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector, useDispatch} from 'react-redux'
import Event from './Event'
import { fetchEvents } from '../../Actions'

function getEvents(events){
  console.log('events', events)
  return Object.keys(events).map((id, index) => {
    return (
      <Grid item xs={3} key={index}>
        <Event 
          name={events[id].name} 
          location={events[id].location} 
          imageUrl={events[id].imageUrl}
          id={id} />
      </Grid>
    )
  })
}

function Events() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents())
  }, [])

  if(!events || events.loading){
    return <div>Loading...</div>;
  }
  if(!events.events || !Object.keys(events.events).length){
    return (
      <Grid container alignItems="center" style={{height: '100vh', width: '100vw'}}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            NO EVENTS CREATED
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={4}> 
          {getEvents(events.events)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Events;
