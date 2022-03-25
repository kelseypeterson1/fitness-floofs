import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { GoogleLogin, Shop, AboutPage, FloofProfile, FlockPage, Homepage, InfoPage, LandingPage, LoginPage, RegisterPage, Nav, Footer, ProtectedRoute, Header } from '../../index.js'
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the Homepage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows GoogleLogin else shows LoginPage
            exact
            path="/user"
          >
            <GoogleLogin />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Homepage else shows LoginPage
            exact
            path="/homepage"
          >
            <Homepage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows FlockPage else shows LoginPage
            exact
            path="/flock"
          >
            <FlockPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows FloofProfile else shows LoginPage
            exact
            path="/floof/:id"
          >
            <FloofProfile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Shop else shows LoginPage
            exact
            path="/Shop"
          >
            <Shop />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
