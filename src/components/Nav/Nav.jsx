import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="homepageNav">
      <div>
          <Button variant="contained">
            <Link to="/flock">
              Flock
            </Link>
          </Button>

          <Button variant="contained">
            <Link to="/info">
              Store
            </Link>
          </Button>

            <LogOutButton className="navLink" />

      </div>
    </div>
  );
}

export default Nav;
