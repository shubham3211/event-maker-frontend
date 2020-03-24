import React, { useState } from 'react'
import { Typography, Grid, Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Modal from '../Modal'
import { deleteEvents, editEvents } from '../../Actions'
import { useDispatch } from 'react-redux'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

function EventBottom({name, location, imageUrl, id}) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();
  console.log('id', id)
  return (
    <Box pl={2} pr={2} mb={5} mt={2}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" style={{fontWeight: 700, color: '#39364f'}}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" variant="subtitle1">
            {location}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <IconButton aria-label="delete">
              <DeleteIcon fontSize="small" onClick={() => setDeleteModal(true)} />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => setEditModal(true)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Modal 
          open={editModal}
          setOpen={setEditModal}
          title={'Edit Event'}
          name={name}
          imageUrl={imageUrl}
          location={location}
          id={id}
          action={({name, imageUrl, location, id}) => dispatch(editEvents({name, imageUrl, location, id}))}/>
        <Modal 
          open={deleteModal} 
          setOpen={setDeleteModal}
          title={'Delete Event'}
          deleteModal={true}
          id={id}>
            <>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending anonymous location data to
                  Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDeleteModal(false)} color="primary">
                  Disagree
                </Button>
                <Button onClick={() => { setDeleteModal(false); dispatch(deleteEvents({id})) }} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </>
          </Modal>
      </Grid>
    </Box>
  )
}

export default EventBottom
