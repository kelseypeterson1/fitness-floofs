import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form onSubmit={login} className='loginForm'>
      <center>

        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        

        <div>
          <label htmlFor="username">
            <input
              id="username"
              variant="filled"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="username"
              className="inputField"
              />
            <br/>
          </label>
        </div>
        <br/>

        <div>
          <label htmlFor="password">
            <input
              id="password"
              variant="filled"
              type="password"
              required
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
              className="inputField"
            />
            <br />
          </label>
        </div>
        <br/>

        <div>
          <Button 
            variant="contained" 
            type="submit" 
            name="submit"
            sx={{backgroundColor: "black", opacity: .9}}
          >
            Login
          </Button>
        </div>
      </center>
    </form>
  );
}

export default LoginForm;
