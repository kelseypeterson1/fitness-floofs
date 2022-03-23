import CasinoIcon from '@mui/icons-material/Casino';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export default function RandomizePersonality() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const randomizePersonality = () => {
        dispatch({ 
            type: 'RANDOMIZE_PERSONALITY', 
            payload: {
                id: id,
                user: user
            }
        })
    }

    return (
        <div>
            <IconButton variant="text" onClick={randomizePersonality}>
                <CasinoIcon />
            </IconButton>
        </div>
    )
}