import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogOutButton, Egg, StepCounter, GoogleAuth, Nav, Header } from '../../index.js'

export default function FlockPage() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: 'FETCH_FLOCK', payload: user });
    }, []);

    return(

        <div className="FlockPage">
            <h2>FLOCK PAGE</h2>
        </div>
    )
}