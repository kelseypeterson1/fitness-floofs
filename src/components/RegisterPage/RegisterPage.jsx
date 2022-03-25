import React from 'react';
import { RegisterForm, Header } from '../../index.js'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="loginPage">
      <Header />
      <RegisterForm />

      <center>
        <Button
          variant="text"
          name="login-button"
          sx={{ color: 'black', pt: 2 }}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
