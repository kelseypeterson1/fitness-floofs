import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    // <div className="homepageNav">
    //   <div>
    //     <Button variant="contained">
    //       <Typography variant="h8">
    //         <Link to="/flock" style={{ textDecoration: 'none', color: 'white' }}>
    //           Flock
    //         </Link>
    //       </Typography>
    //     </Button>

    //     <Button variant="contained">
    //       <Typography variant="h8">
    //         <Link to="/info" style={{ textDecoration: 'none', color: 'white' }}>
    //           Store
    //         </Link>
    //       </Typography>
    //     </Button>

    //     <LogOutButton className="navLink" />

    //   </div>
    // </div>

    <div className='navBar'>
      
    </div>
  );
}

export default Nav;
