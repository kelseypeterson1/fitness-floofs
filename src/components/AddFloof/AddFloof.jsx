import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BackButton, ReleaseNotification } from '../../index.js'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddFloof() {

    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch({ type: 'ADD_FLOOF', payload: {
            floof_id: 6,
            user_id: 1,
            name: 'foxyyyy',
            personality: 'foxy'
        } });
    }

    return(
        <>
            <Button variant='contained' onClick={handleAdd}>Add!</Button>
        </>
    )
}