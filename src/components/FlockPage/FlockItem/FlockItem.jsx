import './FlockItem.css'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function FlockItem(floofProp) {
    const floof = floofProp.floof
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
    const floofDiv = `floof${floof.floof_id}Div`
    const history = useHistory();
    const index = 'index' + floofProp.index

    console.log('floofProp is', floofProp)
    console.log('index is', index)

    // clicking the floof brings the user to their profile
    const handleClick = () => {
        history.push(`/floof/${floof.id}`);
    }

    return (
        <div className="floof">
            <img 
                className={[floofDiv, index].join(" ")}
                // className={index}
                src={imageUrl} 
                onClick={handleClick}
            />
        </div>
    )
}