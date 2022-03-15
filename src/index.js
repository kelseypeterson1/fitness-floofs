import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

export { default as AboutPage } from './components/AboutPage/AboutPage'
export { default as App } from './components/App/App'
export { default as Footer } from './components/Footer/Footer'
export { default as Header } from './components/Header/Header'
export { default as InfoPage } from './components/InfoPage/InfoPage'
export { default as LandingPage } from './components/LandingPage/LandingPage'
export { default as LoginForm } from './components/LoginForm/LoginForm'
export { default as LoginPage } from './components/LoginPage/LoginPage'
export { default as LogOutButton } from './components/LogOutButton/LogOutButton'
export { default as Nav } from './components/Nav/Nav'
export { default as ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
export { default as RegisterForm } from './components/RegisterForm/RegisterForm'
export { default as RegisterPage } from './components/RegisterPage/RegisterPage'
export { default as UserPage } from './components/Homepage/Homepage'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
