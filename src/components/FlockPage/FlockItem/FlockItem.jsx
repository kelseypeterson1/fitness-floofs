import './FlockItem.css'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function FlockItem(floofProp) {
    const dispatch = useDispatch();
    const floof = floofProp.floof
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
    const floofDiv = `floof${floof.floof_id}Div`
    const history = useHistory();
    const index = 'index' + floofProp.index
    const user = useSelector((store) => store.user);
    
    // removing time from "paid" date
    const paidDate = floof.paid.split('T')[0];
    
    // get current date
    const date = new Date();
    const year = date.getFullYear() * 1e4; // 1e4 gives us the the other digits to be filled later, so 20210000.
    const month = (date.getMonth() + 1) * 100; // months are numbered 0-11 in JavaScript, * 100 to move two digits to the left. 20210011 => 20211100
    const day = date.getDate(); // 20211100 => 20211124
    const fullDate = (year + month + day + '')
    const currentDate = fullDate.slice(0, 4) + '-' + fullDate.slice(4, 6) + '-' + fullDate.slice(6)
    
    
    useEffect(() => {
        dispatch({ type: 'FETCH_FLOCK', payload: user });
        dispatch({ type: 'FETCH_COINS', payload: user });
    }, [dispatch]);


    console.log('floofProp is', floofProp);
    console.log('index is', index);

    const handleClick = () => {
        // if the floof has already given coins for the day
        if (paidDate == currentDate) {
            // clicking the floof brings the user to their profile
            history.push(`/floof/${floof.id}`);
            // else the floof pays up
        } else
            console.log('pay')
            dispatch({
                type: 'FLOOF_PAYS', payload:
                {
                    id: floofProp.floof.id,
                    date: currentDate,
                    user: user
                }
        });
    }


    return (
        <div className="floof">
            <img
                className={[floofDiv, index].join(" ")}
                src={imageUrl}
                onClick={handleClick}
            />
        </div>
    )
}