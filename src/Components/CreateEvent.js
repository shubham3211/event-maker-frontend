import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import Modal from './Modal'
import { useDispatch } from 'react-redux';
import { createEvents } from '../Actions'

function CreateEvent() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
    <div style={{
      height: '60px', 
      width: '30px',
      position: 'fixed',
      bottom: '10px',
      right: "40px",
    }}
      onClick={() => setOpen(true)}
    >
      <Button 
        variant="contained" 
        size="large" 
        color="secondary" 
        style={{
          borderRadius: '100%',
          height: '100%',
          width: '100%',
        }}>
          <span>+</span>
        </Button>
    </div>
    <Modal 
      open={open} 
      setOpen={setOpen}
      title={'Create Event'}
      action={({name, imageUrl, location}) => dispatch(createEvents({name, imageUrl, location}))}/>
    </>
  )
}

export default CreateEvent
