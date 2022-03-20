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

export default function EggHatchAlert({ newFloof }) {

    const floofs = useSelector(store => store.floofs);
    const dispatch = useDispatch();
    // const [newFloof, setNewFloof] = useState(9);
    // const determineImage = () => {
    //     if (newFloof) {
    //         return `images/floofs/floof${newFloof.floof_id}.png`;
    //     } else {
    //         return `images/footprints.png`
    //     }
    // }

    const imageUrl = `images/floofs/floof${newFloof.floof_id}.png`
    const floofId = newFloof.floof_id - 1;

    const user = useSelector((store) => store.user);

    // Dialog box functions
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        // setNewFloof(useSelector(store => store.newFloof));
        // dispatch({ type: 'CLEAR_NEW_FLOOF' });
    }; // END dialog box functions


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

            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="egg-hatch-alert">
                <h2>Your egg hatched!</h2>
            </DialogTitle>
            {/* {newFloof && */}
            <DialogContent>
                <center>

                    <h2>{floofs[floofId].type}</h2>
                    <img className="floofProfilePic" src={imageUrl} />
                    <h3>Name: {newFloof.name}</h3>
                    <h3>Personality: {newFloof.personality}</h3>
                </center>
            </DialogContent>
            {/* } */}

            <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 4 }} >
                <Button variant='contained' autoFocus>
                    Add to flock
                </Button>
                &nbsp;
                <Button variant='contained' autoFocus>
                    Release
                </Button>
            </DialogActions>

        </Dialog>
    )
}