import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EggHatchAlert, Egg, StepCounter, Nav, Header, GoogleApi } from '../../index.js'
import './Homepage.css'


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

function Homepage() {
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
    dispatch({ type: 'FETCH_EGG', payload: user });
    dispatch({ type: 'FETCH_FLOCK', payload: user });
    dispatch({ type: 'FETCH_STEPS', payload: user });
    dispatch({ type: 'UPDATE_EGG', payload: user });
    dispatch({ type: 'FETCH_FLOOFS', payload: user });
  }, []);

  const addFloof = () => {
    dispatch({ type: 'ADD_NEW_FLOOF', payload: user })
    setOpen(true);
  }

  return (
    <div className="homepage">
      <Header />

      {/* If new egg is hatched, a popup will appear */}
      {newFloof && <EggHatchAlert newFloof={newFloof} />}

      <Egg />

      &nbsp;

      <StepCounter />

      &nbsp;
      {/* <button onClick={addFloof}> add floof</button> */}

      <div className='homepageSelected'>
        <Nav />
      </div>

    </div >
  );
}

// this allows us to use <App /> in index.js
export default Homepage;


