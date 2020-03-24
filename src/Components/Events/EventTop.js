import React from 'react'
import { Grid, Box } from '@material-ui/core'
import './EventTop.css'

function FoodItemTop({imageUrl}) {
  return (
    <Box borderRadius={20}>
      <Grid container>
        <Grid item xs={12} className="event-image">
          <img src={imageUrl} className="event" alt=""/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(FoodItemTop);