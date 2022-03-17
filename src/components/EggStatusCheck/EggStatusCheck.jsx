// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { AddFloof } from '../../index.js'
// import { useDispatch, useSelector } from 'react-redux';

// const EggStatusCheck = () => {

//     const dispatch = useDispatch()
//     const steps = useSelector(store => store.steps.steps);
//     const user = useSelector((store) => store.user);
//     const egg = useSelector(store => store.egg);

//     console.log('IN EGG STATUS CHECK')


//     dispatch({ type: 'FETCH_STEPS', payload: user })

//     if(steps > 10000 && egg.status < 3) {
//         AddFloof();
//     }

// }

// export default EggStatusCheck;