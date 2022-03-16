import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogOutButton, Egg, StepCounter, GoogleAuth, Nav, Header } from '../../index.js'

export default function FlockPage() {

    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_FLOCK', payload: user });
    }, []);

    return (

        <div className="flockPage">
            <h2>FLOCK PAGE</h2>
            {flock.map((floof, i) => {
                const imageUrl = `images/floofs/floof${floof.floof_id}.png`
                return (
                    <div key={i} className="floof">
                        <img src={imageUrl} />
                    </div>
                )
            })}
        </div>
    )
}