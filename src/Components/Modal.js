import React, { useState } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { TextField, Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Modal({title, open, setOpen, name, location, imageUrl, action, deleteModal, children, id}) {
  const [inputName, setName] = useState(name);
  const [inputLocation, setLocation] = useState(location);
  const [inputImageUrl, setImageUrl] = useState(imageUrl);
  if(deleteModal){
    console.log('delete')
  }
  return (
    <Dialog open={open}>
      <DialogTitle>
        {title}
      </DialogTitle>
      {!deleteModal ?
        <>
          <Box p={3}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    fullWidth 
                    variant="outlined"
                    value={inputName}
                    onChange={(e) => setName(e.target.value)} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mt={2}>
                  <TextField 
                    id="outlined-basic" 
                    label="Image Url" 
                    fullWidth 
                    variant="outlined"
                    value={inputImageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mt={2}>
                  <TextField 
                    id="outlined-basic"
                    label="Location" 
                    fullWidth 
                    variant="outlined"
                    value={inputLocation}
                    onChange={(e) => setLocation(e.target.value)} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Button 
            variant="contained" 
            color="primary" 
            style={{margin: '23px'}}
            onClick={() => {
              action({name: inputName, location: inputLocation, imageUrl: inputImageUrl, id})
              setName("");
              setImageUrl("");
              setLocation("");
              setOpen(false);
            }}>
            Submit
          </Button>
        </>: 
        children
      }
    </Dialog>
  )
}

export default Modal
