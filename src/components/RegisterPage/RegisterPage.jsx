import React from 'react';
import { RegisterForm, Header } from '../../index.js'
import { useHistory } from 'react-router-dom';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
