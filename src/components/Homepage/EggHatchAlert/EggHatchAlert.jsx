import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EggHatchAlert() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
  
    // Dialog box functions
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      dispatch({ type: 'CLEAR_NEW_FLOOF' });
    }; // END dialog box functions
  
    const newFloof = useSelector(store => store.newFloof);
  
    useEffect(() => {
      handleClickOpen();
    }, []);

    return (
        < Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogTitle sx={{ height: 300, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="egg-hatch-alert">
                Your egg hatched!
            </DialogTitle>

            <DialogContent>

            </DialogContent>

            <DialogActions>
                <Button variant='outlined' autoFocus>
                    Cancel
                </Button>
                <Button variant='contained' autoFocus>
                    Yes, free my floof!
                </Button>
            </DialogActions>

        </Dialog>
    )
}