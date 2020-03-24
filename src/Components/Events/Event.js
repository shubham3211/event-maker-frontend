import React from 'react'
import { Grid } from '@material-ui/core'
import EventTop from './EventTop'
import EventBottom from './EventBottom'
import './Event.css'

function Event({name, imageUrl, location, id}) {
  console.log('id', id)
  return (
    <Grid container className="event-item">
      <Grid item xs={12}>
        <EventTop imageUrl={imageUrl} />
      </Grid>
      <Grid item xs={12}>
        <EventBottom name={name} location={location} id={id} imageUrl={imageUrl} />
      </Grid>
    </Grid>
  )
}

export default Event
