import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export default function RenameFloof() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const { id } = useParams();
    const floofs = useSelector(store => store.floofs);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const floof = useSelector((store) => store.selectedFloof);
    const [newName, setNewName] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        // call saga to axios.put the floof name
        dispatch({
            type: 'RENAME_FLOOF', payload: {
                id: id,
                newName: newName,
                user: user
            }
        })
        // empty rename input
        setNewName('');
    };

    return (
        <div>
            <IconButton variant="text" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Rename Floof</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="new-name"
                        label="Name"
                        fullWidth
                        variant="standard"
                        value={newName}
                        onChange={(event) => setNewName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} autoFocus>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit} autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}