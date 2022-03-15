import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function StepCounter() {

    const steps = useSelector(store => store.steps);
    console.log('steps are:', steps)

    return(
        <>
        </>
    )
}