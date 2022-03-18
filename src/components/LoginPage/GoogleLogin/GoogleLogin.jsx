import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function GoogleLogin() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleClick = (event) => {
        dispatch({ type: 'FETCH_STEPS', payload: user });
        dispatch({ type: 'FETCH_EGG', payload: user });
        history.push('/homepage');
    };

    // get info on current date
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${year}-${month}-${day}`;
    console.log('today\'s date:', fullDate);

    useEffect(() => {
        // dispatch({ type: 'FETCH_GOOGLE_DATA' });
        console.log('object sent to check date saga is:', {date: fullDate}, user)
        dispatch({ type: 'CHECK_DATE', payload: {date: fullDate, user}})
    }, []);

    return (
        <button onClick={handleClick}>
            Google data retrieved!
        </button>
    )

}