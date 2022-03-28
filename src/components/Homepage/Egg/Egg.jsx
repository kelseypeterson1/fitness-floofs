import React from 'react';
import { useSelector } from 'react-redux';

import './Egg.css'

export default function Egg() {
    const egg = useSelector(store => store.egg);
    const eggUrl = `/images/eggs/egg-${egg.egg_id}-${egg.status}.png`

    return(
        <div className="dailyEggContainer">
            {egg.status == 3 
                ? <img className="dailyEggImageCracked" alt="daily egg" src={eggUrl} />
                : <img className="dailyEggImage" alt="daily egg" src={eggUrl} />
            }
        </div>
    )
}