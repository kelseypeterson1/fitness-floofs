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


export default function Shop() {

    const user = useSelector((store) => store.user);
    const coins = useSelector((store) => store.coins)
    const boughtItems = useSelector((store) => store.boughtItems)
    const dispatch = useDispatch();

    const buyWinterLandscape = () => {
        dispatch({ type: 'PAY_COINS', payload: 
            {
                amount: 100,
                user: user
            }
        })
        dispatch({ type: 'BUY_LANDSCAPE', payload: 
            {
                landscape: 2,
                user: user
            }
        })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_COINS', payload: user });
        dispatch({ type: 'FETCH_BOUGHT_ITEMS', payload: user });
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
                            <img border="2px" className="cardImage" src="images/backgrounds/winter-landscape.png" />
                            <img border="2px" className="cardImage eggImage" src="images/eggs/egg-11-1.png" />
                        </div>

                        <div className="shopDescriptionRow1">
                            <h5>Winter Flock Page</h5>
                            <h5>x2 Rarity Chance</h5>
                        </div>
                        <div className="shopDescriptionRow1">
                            <div>
                                <img src="images/coin.png" /> 100
                            </div>
                            <div>
                                <img src="images/coin.png" /> 20
                            </div>
                        </div>
                        <div className="shopDescriptionRow1">
                            <Button
                                variant="contained"
                                type="submit"
                                name="submit"
                                sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                                onClick={buyWinterLandscape}
                            >
                                buy
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                name="submit"
                                sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                            >
                                buy
                            </Button>
                        </div>

                        <div className="coinBalance">
                            <img src="images/coin.png" /> {coins.coins}
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