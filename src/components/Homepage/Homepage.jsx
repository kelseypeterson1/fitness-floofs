import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

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

function UserPage() {
  const user = useSelector((store) => store.user);

  // Dialog box functions
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }; // END dialog box functions

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div>

      {/* Greetings popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ height: 300, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="welcome-alert">
          <center>
            <h2>
              Welcome back {user.username}!
            </h2>
          </center>
        </DialogTitle>
      </Dialog>
      {/* END greetings popup */}

    

      <div className="homepageNav">
        <LogOutButton />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
