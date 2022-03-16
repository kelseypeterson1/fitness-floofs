import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BackButton } from '../../index.js'
import './FloofProfile.css'

export default function FloofProfile() {

    const history = useHistory();
    const { id } = useParams();
    const flock = useSelector(store => store.flock);
    const floofs = useSelector(store => store.floofs);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [floof, setFloof] = useState({id: 1, name: 'placeholder', floof_id: 1});
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`;
    const prevNav = '/flock'

    useEffect(() => {
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        setFloof(flock[id-1]);
    }, []);

    const handleClick = () => {
        history.push(`/flock`);
    }

    return (
        <div className="floofProfile">
            <h2>{floofs[id-1].type}</h2>
            <img className="floofProfilePic" src={imageUrl}  />
            <h2>{floof.name}</h2>
            <BackButton prevNav={prevNav} />
        </div>
    )
}