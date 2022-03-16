import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function FloofProfile() {

    const history = useHistory();
    const { id } = useParams();
    const flock = useSelector(store => store.flock);
    const floof = flock[id-1];
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
    console.log('floof is', floof)
    console.log('params is', id)
    console.log('id is', floof.floof_id)

    // let [floofy, setFloofy] = useState([])

    useEffect(() => {
        // console.log('in useEffect')
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        // setFloofy(floof);
        // console.log('floofy is', floofy)
    }, []);

    const handleClick = () => {
        history.push(`/flock`);
    }

    return (
        <>
            <h2>{floof.name}</h2>
            <img src={imageUrl} />
        </>
    )
}