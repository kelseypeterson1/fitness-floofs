import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export default function RenameFloof() {
    const [open, setOpen] = React.useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_FLOOF', payload: id })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        dispatch({ type: 'FETCH_FLOOFS', payload: user });
    }, [dispatch]);

    // START sweet alert functions
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    }; // END sweet alert functions

    const handleSubmit = () => {
        setOpen(false);
        // call saga to axios.put the floof name
        dispatch({
            type: 'RENAME_FLOOF', 
            payload: {
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
                        autoComplete="off"
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