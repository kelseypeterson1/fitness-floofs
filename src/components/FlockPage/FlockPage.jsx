import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FlockItem, Nav } from '../../index.js'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrassIcon from '@mui/icons-material/Grass';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Avatar from '@mui/material/Avatar';


export default function FlockPage() {
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const coins = useSelector((store) => store.coins);
    const boughtItems = useSelector((store) => store.boughtItems);
    const dispatch = useDispatch();
    const background = boughtItems.background_selected


    useEffect(() => {
        dispatch({ type: 'FETCH_FLOOFS', payload: user })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        dispatch({ type: 'FETCH_COINS', payload: user });
        dispatch({ type: 'FETCH_BOUGHT_ITEMS', payload: user });
    }, [dispatch]);

    const backgroundClass = () => {
        switch (background) {
            case 1:
                return "flockBackground1";
                break;
            case 2:
                return "flockBackground2";
                break;
            case 3:
                return "flockBackground3";
                break;
            default:
                return "flockBackground1";
                break;
        }
    }

    const noBackgroundBought = () => {
        if (boughtItems.background2 === false && boughtItems.background3 === false) {
            return true
        } else {
            return false
        }
    }

    const backgroundSelected1 = () => {
        dispatch({ type: 'UPDATE_BACKGROUND', payload: {user: user, background: 1}})
    }

    const backgroundSelected2 = () => {
        dispatch({ type: 'UPDATE_BACKGROUND', payload: {user: user, background: 2}})
    }

    const backgroundSelected3 = () => {
        dispatch({ type: 'UPDATE_BACKGROUND', payload: {user: user, background: 3}})
    }

    return (

        <div className={backgroundClass()}>
            <div className ="backgroundOptions">
                {/* conditionally render background buttons */}
                {noBackgroundBought() === false &&
                    <Avatar 
                    sx={{bgcolor: 'black', m: 1}}
                    onClick = {backgroundSelected1}
                    >
                        <GrassIcon style={{ fontSize: 40 }}/>
                    </Avatar>
                }
                {boughtItems.background2 &&
                    <Avatar 
                    sx={{bgcolor: 'black', m: 1}}
                    onClick = {backgroundSelected2}
                    >
                        <AcUnitIcon style={{ fontSize: 40 }}/>
                    </Avatar>
                }
                {boughtItems.background3 &&
                    <Avatar 
                    sx={{bgcolor: 'black', m: 1}}
                    onClick = {backgroundSelected3}
                    >
                        <AgricultureIcon style={{ fontSize: 40}}/>
                    </Avatar>
                }
            </div>
            <div className="header">
                Flock of Floofs
            </div>
            <div className="inField">
                {flock.map((floof, i) => {
                    return <FlockItem key={floof.id} index={i} floof={floof} user={user} />
                })}
                <div>
                    <h2 className="flockPageCoins">
                        <img src="images/coin.png" />
                        {coins.coins}
                    </h2>
                </div>
                <div className='flockPageNavBar flockPageSelected'>
                    <div className='flockPageSelected'>
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
}