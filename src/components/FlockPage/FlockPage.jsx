import './FlockPage.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FlockItem } from '../../index.js'


export default function FlockPage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const dispatch = useDispatch();
    const prevNav = '/homepage'
    const [counter, setCounter] = useState({counter: 6})

    
    useEffect(() => {
        dispatch({ type: 'FETCH_FLOOFS', payload: user })
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        // console.log('counter is', counter)
    }, []);

    const backButton = (event) => {
        history.push('/homepage');
    }

    // const addToCounter = () => setCounter({counter: 4})
    const addToCounter = () => console.log('in addToCounter')
    // const count = 'count'

    // setCounter(counter + 1)
    // console.log('counter is', counter)
    return (

        <div className="flockPage">
            <div className="header">
                Flock of Floofs
            </div>
            <div className="inField">

                {flock.map((floof) => {
                    addToCounter
                    console.log('counter is', counter)
                    return <FlockItem key={floof.id} floof={floof} counter={counter} />
                })}
                <div>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        variant="contained"
                        onClick={backButton}
                        sx={{ mt: 5 }}
                    >
                    </Button>
                </div>
            </div>
        </div>
    )
}