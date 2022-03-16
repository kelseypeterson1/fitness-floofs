import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Typography variant="h8">
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      variant="contained"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
          </Typography>
  );
}

export default LogOutButton;
