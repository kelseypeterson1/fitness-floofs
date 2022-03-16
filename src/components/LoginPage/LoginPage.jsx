import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginForm, Header } from '../../index.js'

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
