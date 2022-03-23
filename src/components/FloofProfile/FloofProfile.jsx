import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ReleaseNotification, Nav, RenameFloof, RandomizePersonality } from '../../index.js'
import './FloofProfile.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function FloofProfile() {

    const history = useHistory();
    const { id } = useParams();
    const floofs = useSelector(store => store.floofs);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const floof = useSelector((store) => store.selectedFloof);
    const [newName, setNewName] = useState('');
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`;

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

                <Card sx={{
                    width: 300,
                    opacity: 0.95,
                    mt: 5
                    // backgroundColor: 'transparent',
                }}>
                    <CardContent sx={{ color: 'black', backgroundColor: 'white' }}>

                        <center>
                            {/* <h1>{floofs[floof.floof_id].type ? 'yes' : 'name incoming'}</h1> */}
                            <h1>{floofs[floof.floof_id] ? floofs[floof.floof_id - 1].type : 'name incoming'} Floof</h1>
                            <img className="floofProfilePic" src={imageUrl} />
                        </center>
                        <div className="noWrap">
                            <h3>Name: {floof.name}</h3>
                            <RenameFloof />
                        </div>
                        <div className="noWrap">
                            <h3>Age: {age} {age === 1 ? 'day' : 'days'}</h3>
                        </div>
                        <div className="noWrap">
                            <h3>Personality: {floof.personality}</h3>
                            <RandomizePersonality />
                        </div>
                        <center>
                            <ReleaseNotification id={id} />
                        </center>
                    </CardContent>
                </Card>

                <Nav />
            </div>
        </div>
    )
}