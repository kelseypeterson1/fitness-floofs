import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BackButton } from '../../index.js'

export default function FlockPage() {

    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const dispatch = useDispatch();
    const prevNav = '/'

    useEffect(() => {
        dispatch({ type: 'FETCH_FLOCK', payload: user });
    }, []);

    return (

        <div className="flockPage">
            <div className="header">
                Flock of Floofs
            </div>
            <div className="inField">

                {flock.map((floof, i) => {
                    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
                    return (
                        <div key={i} className="floof">
                            <img className="floofImage" src={imageUrl} />
                        </div>
                    )
                })}
                <div>
                    <BackButton prevNav={prevNav} />
                </div>
            </div>
        </div>
    )
}