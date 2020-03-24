import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Box, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteEvents } from '../Actions'

function deleteAllEvents(events, dispatch){
  Object.keys(events).map((id) => {
    dispatch(deleteEvents({id}));
  })
}

function Appbar() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  return (
    <div>
      <Box mb={2}>
        <AppBar position="static" style={{backgroundColor: 'white', marginTop: '0px'}}>
          <Toolbar>
            <Grid container>
              <Grid item xs={3}>
                <img src="https://static.cure.fit/assets/images/curefit-v-man.svg" alt=""/>
              </Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={3}>
                <div 
                  style={{
                    backgroundImage: 'linear-gradient(103deg,#f74530,#ff2e73)',
                    borderRadius: '31px',
                    padding: '12px 40px',
                    cursor: 'pointer',
                    width: '70px',
                    textAlign: 'center',
                    float: 'right',
                    cursor: 'pointer'}}
                    onClick={() => deleteAllEvents(events.events, dispatch)}>
                    <span>
                      Logout
                    </span>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Appbar

