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
import { useHistory } from 'react-router-dom';


export default function ReleaseNotification({ id }) {

    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const release = () => {
        // call saga to delete floof from DB
        dispatch({
            type: 'DELETE_FLOOF', payload: {
                id: id,
                user: user
            }
        });

        // bring user back to flock page
        history.push('/flock');
    }

    return (
        <div>
            <Button 
                variant="contained" 
                onClick={handleClickOpen} 
                sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
            >
                Release
            </Button>
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="release-floof-alert">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Releasing your floof to the wild means they will be removed from your flock permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleCancel} autoFocus>
                        Cancel
                    </Button>
                    <Button variant='contained' onClick={release} autoFocus>
                        Yes, free my floof!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}