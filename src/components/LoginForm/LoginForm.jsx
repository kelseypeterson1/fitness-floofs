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
    <form className="formPanel" onSubmit={login}>
      <center>

        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        <div>
          <label htmlFor="username">
            <TextField
              id="username"
              variant="outlined"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
            />
            <br/>
            Username:
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <TextField
              id="password"
              variant="outlined"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            Password:
          </label>
        </div>

        <div>
          <br/>
          <Button variant="contained" className="btn" type="submit" name="submit">To the Hatchery!</Button>
        </div>
      </center>
    </form>
  );
}

export default LoginForm;
