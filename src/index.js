import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

export { default as AboutPage } from './components/TemplateFunction/AboutPage/AboutPage'
export { default as App } from './components/App/App'
export { default as Footer } from './components/Footer/Footer'
export { default as Header } from './components/Header/Header'
export { default as Homepage } from './components/Homepage/Homepage'
export { default as InfoPage } from './components/TemplateFunction/InfoPage/InfoPage'
export { default as LandingPage } from './components/LandingPage/LandingPage'
export { default as LoginForm } from './components/LoginPage/LoginForm/LoginForm'
export { default as LoginPage } from './components/LoginPage/LoginPage'
export { default as LogOutButton } from './components/Nav/LogOutButton/LogOutButton'
export { default as Nav } from './components/Nav/Nav'
export { default as ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
export { default as RegisterForm } from './components/RegisterPage/RegisterForm/RegisterForm'
export { default as RegisterPage } from './components/RegisterPage/RegisterPage'
export { default as Egg } from './components/Homepage/Egg/Egg'
export { default as StepCounter } from './components/Homepage/StepCounter/StepCounter'
export { default as GoogleAuth } from './components/GoogleAuth/GoogleAuth'
export { default as FlockPage } from './components/FlockPage/FlockPage'
export { default as BackButton } from './components/Nav/BackButton/BackButton'
export { default as FloofProfile } from './components/FloofProfile/FloofProfile'
// export { default as  } from './components//'
// export { default as  } from './components//'
// export { default as  } from './components//'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
