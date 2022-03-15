import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Egg() {
    const egg = useSelector(store => store.egg);
    const eggUrl = `/images/eggs/egg-${egg}-1.png`

    return(
        <div className="dailyEggContainer">
            <img className="dailyEggImage" alt="daily egg" src={eggUrl} />
        </div>
    )
}