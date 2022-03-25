import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginForm, Header } from '../../index.js'
import './LoginPage.css'
import Button from '@mui/material/Button';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginPage">
      <Header />
      
      <LoginForm />

      <center>
        <Button
          variant="text"
          name="register-button"
          sx={{ color: 'black', pt: 2 }}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
