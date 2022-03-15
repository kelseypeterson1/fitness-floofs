import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import Dashboard from '../Dashboard/Dashboard';
// import './App.css';
const { SetCookie, DeleteCookie, hasCookie } = require('./GoogleCookieManager.js');
// const CLIENT_ID = CLIENT ID HERE;
// require('dotenv').config();


export default function GoogleAuth() {

    console.log('client ID is', CLIENT_ID)

        const [user, setUser] = useState({ haslogin: false, accessToken: '' });

        useEffect(() => {
            const cookieObject = hasCookie();
            if (cookieObject.haslogin) {
                setUser({
                    ...cookieObject
                });
            }
        }, []);
        function login(response) {
            if (response.wc.access_token) {
                setUser({
                    ...response.profileObj,
                    haslogin: true,
                    accessToken: response.wc.access_token
                })
            }
            SetCookie({
                ...response.profileObj,
                accessToken: response.wc.access_token
            });
        }

        function logout(response) {
            setUser({ haslogin: false, accessToken: '' });
            DeleteCookie(['accessToken', 'email', 'givenName', 'familyName', 'imageUrl', 'name', 'googleId']);
        }

        function handleLoginFailure(response) {
            alert('Failed to log in')
        }
        function handleLogoutFailure(response) {
            alert('Failed to log out')
        }
        return (
            <div className="App">
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#272727' }}>
                    <Navbar.Brand href="#home" style={{ color: '#ffffff' }}>Fit Me Up</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        {user.haslogin ?
                            <GoogleLogout
                                clientId={CLIENT_ID}
                                buttonText='Logout'
                                onLogoutSuccess={logout}
                                onFailure={handleLogoutFailure}
                            >
                            </GoogleLogout> : <GoogleLogin
                                clientId={CLIENT_ID}
                                buttonText='Login'
                                onSuccess={login}
                                onFailure={handleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                responseType='code,token'
                                scope={'https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.location.read'}
                            />
                        }
                    </Nav>
                </Navbar>
                {/* <Dashboard user={user} /> */}
            </div>
        );
    }