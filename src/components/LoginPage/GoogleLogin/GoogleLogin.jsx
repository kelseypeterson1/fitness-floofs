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
        // routes to the prior page
        history.push('/homepage');
    };

    useEffect(() => {
        // handleClickOpen();
        dispatch({ type: 'FETCH_GOOGLE_DATA' });
      }, []);

    return(
        <button onClick={handleClick}>
            Google data retrieved!
        </button>
    )

}