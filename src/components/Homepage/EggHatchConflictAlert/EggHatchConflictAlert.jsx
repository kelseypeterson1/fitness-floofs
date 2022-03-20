import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EggHatchConflictAlert.css'



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function EggHatchConflictAlert({ newFloof, floofs, oldFloof }) {

    const dispatch = useDispatch();
    const imageUrl = `images/floofs/floof${newFloof.floof_id}.png`
    const floofId = newFloof.floof_id - 1;
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);

    // Dialog box functions
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        dispatch({ type: 'CLEAR_NEW_FLOOF' });
    }; // END dialog box functions


    useEffect(() => {
        handleClickOpen();
    }, []);

    const release = () => {
        dispatch({
            type: 'DELETE_FLOOF', payload: {
                id: newFloof.id,
                user: user
            }
        })
        setOpen(false);
    }

    const addToFlock = () => {
        setOpen(false);
        dispatch({ type: 'CLEAR_NEW_FLOOF' })
    }

    return (
        < Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} id="egg-hatch-alert">
                <center>
                    <h2>Your egg hatched!</h2>
                    <h3>You already own a {floofs[floofId].type} floof</h3>
                </center>
            </DialogTitle>

            <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <div className='conflictDivOutline'>
                    <h5>Original</h5>
                <div className='conflictDiv'>
                    <img className="floofProfilePic" src={imageUrl} />
                    <h3>Name: {oldFloof.name}</h3>
                    <h3>Personality: {oldFloof.personality}</h3>
                </div>
                </div>
                <div className='conflictDivOutline'>
                    <h5>Hatchling</h5>
                <div className='conflictDiv'>
                    <img className="floofProfilePic" src={imageUrl} />
                    <h3>Name: {newFloof.name}</h3>
                    <h3>Personality: {newFloof.personality}</h3>
                </div>
                </div>
            </DialogContent>

            <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 4 }} >
                <Button variant='contained' onClick={addToFlock} autoFocus>
                    Add to flock
                </Button>
                &nbsp;
                <Button variant='contained' onClick={release} autoFocus>
                    Release
                </Button>
            </DialogActions>

        </Dialog>
    )
}