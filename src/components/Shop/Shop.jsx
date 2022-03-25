import './Shop.css'
// import * as React from 'react';
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
import CardMedia from '@mui/material/CardMedia';


export default function Shop() {

    const user = useSelector((store) => store.user);
    const coins = useSelector((store) => store.coins)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_COINS', payload: user });
      }, []);

    return (
        <div className="shopBackground">
            <div className="withinShop">
                <Box
                    sx={{
                        width: 300,
                        // height: 100,
                        opacity: 0.95,
                        m: 5,
                        backgroundColor: 'white',
                        // mt: 25
                        // backgroundColor: 'transparent',
                    }}
                    borderRadius={5}
                >
                    <div className="header">Shop</div>

                    <div className="shopContents">
                        <div className="shopImagesRow1">
                            <img border="2px" className="cardImage" src="images/backgrounds/winter-landscape.png"/>
                            <img border="2px" className="cardImage eggImage" src="images/eggs/egg-11-1.png"/>
                        </div>

                        <div className="shopDescriptionRow1">
                            <h5>Winter Flock Page</h5>
                            <h5>x2 Rarity Chance</h5>
                        </div>
                        <div className="shopDescriptionRow1">
                            <h5>100g</h5>
                            <h5>20g</h5>
                        </div>
                        <div className="shopDescriptionRow1">
                            <Button
                                variant="contained"
                                type="submit"
                                name="submit"
                                sx={{ backgroundColor: "skyblue", color: "black" }}
                            >
                                Buy
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                name="submit"
                                sx={{ backgroundColor: "skyblue", color: "black" }}
                            >
                                Buy
                            </Button>
                        </div>

                        <div className="coinBalance">
                            <img src="images/coin.png"/>
                            {coins.coins}
                        </div>
                    </div>
                </Box>

                <div className="shopPageSelected">
                    <Nav />
                </div>
            </div>
        </div>
    )
}