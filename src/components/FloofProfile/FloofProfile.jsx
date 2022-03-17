import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BackButton, ReleaseNotification } from '../../index.js'
import './FloofProfile.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import { reset } from 'nodemon';

export default function FloofProfile() {

    const history = useHistory();
    const { id } = useParams();
    const flock = useSelector(store => store.flock);
    const floofs = useSelector(store => store.floofs);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const floof = useSelector((store) => store.selectedFloof);
    // const [floof, setFloof] = useState({ id: 1, name: 'placeholder', floof_id: 1 });
    const [newName, setNewName] = useState('');
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`;
    const prevNav = '/flock'

    
    useEffect(() => {
        // setFloof(flock[id - 1]);
        dispatch({ type: 'FETCH_SELECTED_FLOOF', payload: id })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
    }, []);

    // triggered when user clicks 'rename' button
    const rename = () => {
        // call saga to axios.put the floof name
        dispatch({
            type: 'RENAME_FLOOF', payload: {
                id: id,
                newName: newName,
                user: user
            }
        })
        // // render new name on DOM
        // setFloof({
        //     ...floof,
        //     name: newName,
        //  })
         // empty rename input
        setNewName('');
    }


    
    return (
        <div className="floofProfile">
            <h2>{floof.type}</h2>
            <img className="floofProfilePic" src={imageUrl} />
            <h2>Name: {floof.name}</h2>
            <h2>Age: {floof.age} days</h2>
            <h2>Personality: {floof.personality}</h2>

            <TextField
                id="new-name"
                required
                label="New name"
                variant="standard"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
            />

            <Button variant="contained" onClick={rename}>
                <Typography variant="h8">
                    Rename
                </Typography>
            </Button>
            <ReleaseNotification id={id}/>
            <BackButton prevNav={prevNav} />
        </div>
    )
}