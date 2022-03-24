import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FlockItem, Nav } from '../../index.js'


export default function FlockPage() {
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch({ type: 'FETCH_FLOOFS', payload: user })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
    }, []);

    return (

        <div className="flockPage">
            <div className="header">
                Flock of Floofs
            </div>
            <div className="inField">
                {flock.map((floof, i) => {
                    return <FlockItem key={floof.id} index={i} floof={floof} />
                })}
            <div className ='flockPageSelected'>
                <Nav />
            </div>
            </div>
        </div>
    )
}