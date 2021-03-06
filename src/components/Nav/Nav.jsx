import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/login')
  }
  
  if (user === {}) {
    history.push('/login');
  }

  return (

    <div className='navBar'>
      <div className='navBarOption'>
        <Link to="/homepage" style={{ textDecoration: 'none', color: 'black' }}>
          <HomeIcon style={{ fontSize: 40 }} />
        </Link>
      </div>
      <div className='navBarOption'>
        <Link to="/flock" style={{ textDecoration: 'none', color: 'black' }}>
          <LandscapeIcon style={{ fontSize: 40 }} />
        </Link>
      </div>
      <div className='navBarOption'>
        <Link to="/Shop" style={{ textDecoration: 'none', color: 'black' }}>
          <ShoppingCartIcon style={{ fontSize: 40 }} />
        </Link>
      </div>
      <div 
        className='navBarOption'
        onClick={logout}

      >
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Nav;
