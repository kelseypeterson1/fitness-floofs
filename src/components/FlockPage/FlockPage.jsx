import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function FlockPage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const dispatch = useDispatch();
    const prevNav = '/homepage'


    useEffect(() => {
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        dispatch({ type: 'FETCH_FLOOFS', payload: user })
    }, []);

    const backButton = (event) => {
        history.push('/homepage');
    }


    return (

        <div className="flockPage">
            <div className="header">
                Flock of Floofs
            </div>
            <div className="inField">

                {flock.map((floof) => {
                    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
                    const handleClick = () => {
                        history.push(`/floof/${floof.id}`);
                    }                
                    return (
                        <div key={floof.id} className="floof">
                            <img 
                                className="floofImage" 
                                src={imageUrl} 
                                onClick={handleClick}
                            />
                        </div>
                    )
                })}
                <div>
                <Button
                        startIcon={<ArrowBackIcon />}
                        variant="contained"
                        onClick={backButton}
                        sx={{ mt: 5 }}
                    >
                    </Button>
                </div>
            </div>
        </div>
    )
}