import React from 'react'
import Grid from '@material-ui/core/Grid';
import Events from './Events/Events'
import CreateEvent from './CreateEvent';
import Appbar from './Appbar'

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Appbar />
        <Events />
      </Grid>
      <CreateEvent />
    </Grid>
  )
}

export default Home;
