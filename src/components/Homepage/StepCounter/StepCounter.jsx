import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './StepCounter.css'


export default function StepCounter() {
    const steps = useSelector(store => store.steps.steps);
    const stepsFormatted = steps.toLocaleString("en-US");
    const percent = formatAsPercent(Number(steps) / 10000);

    function formatAsPercent(num) {
        return new Intl.NumberFormat('default', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num / 100);
    }

    return (
        <div className='stepContainer'>
            <h1>{percent}</h1>
            <div className='stepDisplay'>
                <img src='images/footprints.png' />
                <h3>{stepsFormatted}/ 5,000</h3>
            </div>
        </div>
    )
}