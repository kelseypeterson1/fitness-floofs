import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './StepCounter.css'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function StepCounter() {
    const steps = useSelector(store => store.steps.steps);
    const stepsFormatted = steps.toLocaleString("en-US");
    const percent = formatAsPercent(Number(steps) / 10000);

    function formatAsPercent(num) {
        return new Intl.NumberFormat('default', {
            style: 'percent',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    }

    return (
        <center>

            <Card sx={{ 
                    maxWidth: 225, 
                    opacity: 0.75,
                    // backgroundColor: 'transparent',
                }}>
                <CardContent sx={{color: 'black', backgroundColor: 'white'}}>
                    <div className='stepsContainer'>
                        <h1>{percent}</h1>
                        <div className='stepsDisplay'>
                            <img src='images/footprints.png' />
                            &nbsp;
                            &nbsp;
                            <h3>{stepsFormatted}/ 10,000</h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </center>
    )
}