import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ReleaseNotification } from '../../index.js'
import './FloofProfile.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



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
        dispatch({ type: 'FETCH_SELECTED_FLOOF', payload: id })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        dispatch({ type: 'FETCH_FLOOFS', payload: user });
    }, [dispatch]);

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
        // empty rename input
        setNewName('');
    }

    const backButton = (event) => {
        history.push('/flock');
    }

    // get current date
    const date = new Date();
    const year = date.getFullYear() * 1e4; // 1e4 gives us the the other digits to be filled later, so 20210000.
    const month = (date.getMonth() + 1) * 100; // months are numbered 0-11 in JavaScript, * 100 to move two digits to the left. 20210011 => 20211100
    const day = date.getDate(); // 20211100 => 20211124
    const fullDateUnformatted = (year + month + day + '')
    const fullDate = fullDateUnformatted.slice(0, 4) + '-' + fullDateUnformatted.slice(4, 6) + '-' + fullDateUnformatted.slice(6)

    // calculate age of floof
    function getDays(start, last) {
        //initialize dates with Date object
        const date1 = new Date(start);
        const date2 = new Date(last);
    
        // calculation for converting a day into milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
    
        // calculation for the time difference between start and last
        const diffTime = date2.getTime() - date1.getTime();
    
        // calculation for the days between start and last
        const diffDays = Math.round(diffTime / oneDay);
        // return number of days
        return diffDays;
    }
    const age = getDays(floof.birthday, fullDate)

    
    return (
        <div className="background">
            <div className="floofProfile">
                <center>

                    <Card sx={{
                        maxWidth: 500,
                        opacity: 0.9,
                        mt: 5
                        // backgroundColor: 'transparent',
                    }}>
                        <CardContent sx={{ color: 'black', backgroundColor: 'white' }}>

                            {/* <h1>{floofs[floof.floof_id].type ? 'yes' : 'name incoming'}</h1> */}
                            <h1>{floofs[floof.floof_id] ? floofs[floof.floof_id - 1].type : 'name incoming'} Floof</h1>
                            <img className="floofProfilePic" src={imageUrl} />
                            <h2>Name: {floof.name}</h2>
                            <h2>Age: {age} days</h2>
                            <h2>Personality: {floof.personality}</h2>

                            <TextField
                                id="new-name"
                                required
                                label="New name"
                                variant="standard"
                                value={newName}
                                onChange={(event) => setNewName(event.target.value)}
                            />
                        </CardContent>
                    </Card>
                </center>
                <div className="buttons">
                    <Button
                        startIcon={<ArrowBackIcon />}
                        variant="contained"
                        onClick={backButton}
                        sx={{ m: 1 }}
                    >
                    </Button>
                    <Button
                        variant="contained"
                        onClick={rename}
                        sx={{ m: 1 }}
                    >
                        Rename
                    </Button>
                    <ReleaseNotification id={id} />
                </div>
            </div>
        </div>
    )
}