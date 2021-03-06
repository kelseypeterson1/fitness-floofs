import './Shop.css'
import { Nav } from '../../index.js'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Shop() {

    const user = useSelector((store) => store.user);
    const coins = useSelector((store) => store.coins)
    const boughtItems = useSelector((store) => store.boughtItems)
    const dispatch = useDispatch();

    const buyWinterBackground = () => {
        dispatch({
            type: 'PAY_COINS', payload:
            {
                amount: 100,
                user: user
            }
        })
        dispatch({
            type: 'BUY_LANDSCAPE', payload:
            {
                landscape: 2,
                user: user
            }
        })
    }

    const buyBarnBackground = () => {
        dispatch({
            type: 'PAY_COINS', payload:
            {
                amount: 100,
                user: user
            }
        })
        dispatch({
            type: 'BUY_LANDSCAPE', payload:
            {
                landscape: 3,
                user: user
            }
        })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_COINS', payload: user });
        dispatch({ type: 'FETCH_BOUGHT_ITEMS', payload: user });
    }, [dispatch]);

    return (
        <div className="shopBackground">
            <div className="withinShop">
                <Box
                    sx={{
                        width: 300,
                        opacity: 0.95,
                        m: 5,
                        backgroundColor: 'white',

                    }}
                    borderRadius={5}
                >
                    <div className="header">Shop</div>

                    <div className="shopContents">

                        {/* item descriptions */}
                        <div className="shopDescriptionRow1">
                            <h5>Winter Flock Page</h5>
                            <h5>Barn Flock Page</h5>
                        </div>

                        {/* display backgrounds available */}
                        <div className="shopImagesRow1">
                            {boughtItems.background2
                                ? <img border="2px" className="cardImage" src="images/backgrounds/winter-landscape-bought.png" />
                                : <img border="2px" className="cardImage" src="images/backgrounds/winter-landscape.png" />
                            }
                            {boughtItems.background3
                                ? <img border="2px" className="cardImage" src="images/backgrounds/barn-landscape-bought.png" />
                                : <img border="2px" className="cardImage" src="images/backgrounds/barn-landscape.png" />
                            }
                        </div>

                        {/* item costs  */}
                        <div className="shopDescriptionRow2">
                            <div>
                                <img src="images/coin.png" /> 100
                            </div>
                            <div>
                                <img src="images/coin.png" /> 100
                            </div>
                        </div>

                        {/* buy button conditionally rendered */}
                        <div className="shopDescriptionRow1">
                            {boughtItems.background2
                                ? <Button
                                    disabled
                                    variant="contained"
                                    type="submit"
                                    name="submit"
                                    sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                                    onClick={buyWinterBackground}
                                >
                                    buy
                                </Button>

                                : <Button
                                    variant="contained"
                                    type="submit"
                                    name="submit"
                                    sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                                    onClick={buyWinterBackground}
                                >
                                    buy
                                </Button>
                            }

                            {boughtItems.background3
                                ? <Button
                                    disabled
                                    variant="contained"
                                    type="submit"
                                    name="submit"
                                    sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                                    onClick={buyBarnBackground}
                                >
                                    buy
                                </Button>

                                : <Button
                                    variant="contained"
                                    type="submit"
                                    name="submit"
                                    sx={{ backgroundColor: "skyblue", color: "black", mt: 2 }}
                                    onClick={buyBarnBackground}
                                >
                                    buy
                                </Button>
                            }
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