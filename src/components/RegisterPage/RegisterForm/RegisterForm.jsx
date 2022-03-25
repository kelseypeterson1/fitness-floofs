import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form onSubmit={registerUser} className="loginForm">
      <center>
        <h2>Register</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>

          <label htmlFor="username">
            <input
              id="username"
              placeholder="username"
              className="inputField"
              variant="outlined"
              type="text"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
          </label>
        </div>
        <br />

        <div>
          <label htmlFor="password">
            <input
              placeholder="password"
              className="inputField"
              id="password"
              variant="outlined"
              type="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
          </label>
        </div>
        <br />

        <div>
          <Button
            variant="contained"
            type="submit"
            name="submit"
            sx={{ backgroundColor: "black", opacity: .9 }}
          >
            Register
          </Button>
        </div>
      </center>
    </form>
  );
}

export default RegisterForm;
