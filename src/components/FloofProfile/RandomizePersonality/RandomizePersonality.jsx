import CasinoIcon from '@mui/icons-material/Casino';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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