import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

export { default as App } from './components/App/App'
export { default as Header } from './components/Header/Header'
export { default as Homepage } from './components/Homepage/Homepage'
export { default as LoginForm } from './components/LoginPage/LoginForm/LoginForm'
export { default as LoginPage } from './components/LoginPage/LoginPage'
export { default as Nav } from './components/Nav/Nav'
export { default as ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
export { default as RegisterForm } from './components/RegisterPage/RegisterForm/RegisterForm'
export { default as RegisterPage } from './components/RegisterPage/RegisterPage'
export { default as Egg } from './components/Homepage/Egg/Egg'
export { default as StepCounter } from './components/Homepage/StepCounter/StepCounter'
export { default as FlockPage } from './components/FlockPage/FlockPage'
export { default as FloofProfile } from './components/FloofProfile/FloofProfile'
export { default as ReleaseNotification } from './components/FloofProfile/ReleaseNotification/ReleaseNotification'
export { default as GoogleLogin } from './components/LoginPage/GoogleLogin/GoogleLogin'
export { default as FlockItem } from './components/FlockPage/FlockItem/FlockItem'
export { default as EggHatchAlert } from './components/Homepage/EggHatchAlert/EggHatchAlert'
export { default as EggHatchConflictAlert } from './components/Homepage/EggHatchConflictAlert/EggHatchConflictAlert'
export { default as RenameFloof } from './components/FloofProfile/RenameFloof/RenameFloof'
export { default as RandomizePersonality } from './components/FloofProfile/RandomizePersonality/RandomizePersonality'
export { default as Shop } from './components/Shop/Shop'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
