import './Shop.css'
import { Nav } from '../../index.js'
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


export default function Shop() {
    return (
        <div className="shopBackground">
            <div className="withinShop">
                {/* <center> */}

                    <div>Shop</div>
                {/* </center> */}

                {/* <Card sx={{
                    // width: 300,
                    opacity: 0.95,
                    m: 5,
                    mt: 25
                    // backgroundColor: 'transparent',
                }}>
                    <CardContent sx={{ color: 'black', backgroundColor: 'white' }}>

                        <center>
                            <h2>New landscape</h2>
                            <h2>Double egg rarity chance</h2>
                        </center>
                    </CardContent>
                </Card> */}

                <div className="shopPageSelected">
                    <Nav />
                </div>
            </div>
        </div>
    )
}