// import axios from 'axios';
// const { setReloadCookie, hasReloadCookie } = require('./GoogleCookieManager.js');
// const API_KEY = env.REACT_APP_API_KEY;
// import env from "react-dotenv";
// const dataValues = [
//     {
//         "title": "Calories",
//         "type": "com.google.calories.expended"
//     },
//     {
//         "title": "Heart",
//         "type": "com.google.heart_minutes"
//     },
//     {
//         "title": "Move",
//         "type": "com.google.active_minutes"
//     },
//     {
//         "title": "Steps",
//         "type": "com.google.step_count.delta"
//     },
// ];
// // We need to get aggregated data *on that particular day for now*

// // Provide request headers to be attached with each function call
// export const getRequestHeaders = (accessToken) => {
//     // console.log('in getRequestHeaders, token is:', accessToken)
//     const requestHeaderBody = {
//         params: {
//             'key': API_KEY
//         },
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Accept': 'application/json'
//         }
//     }
//     return requestHeaderBody;
// }

// export const getAggregatedDataBody = (dataType, endTime) => {
//     console.log('in getAggregateDataBody, dataType is', dataType)
//     // console.log('in getAggregateDataBody, endTime is', endTime)
//     const requestBody = {
//         "aggregateBy": [{
//             "dataTypeName": dataType
//         }],
//         "bucketByTime": {
//             "durationMillis": 86400000
//         },
//         "endTimeMillis": endTime,
//         "startTimeMillis": endTime - (7 * 86400000)
//     }
//     return requestBody;
// }

// export const getAggregateData = async (body, headers) => {
//     console.log('in get AggregateData function, body is', body)
//     const req = await axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, headers);
//     return req;
// }

// // we need to return [{Today}, {Yesterday} .... {7 days back}]
// // Each object has : {"Calories" : value, "Heart": value ... , "Date": }
// const baseObj = {
//     "Calories": 0,
//     "Heart": 0,
//     "Move": 0,
//     "Steps": 0
// };

// export const getWeeklyData = async (endTime, requestParameters, callBack, initialState) => {
//     let state = [];
//     let promises = [];
//     const hasCookie = hasReloadCookie();
//     if (!hasCookie.present || initialState.length === 0) {
//         for (var i = 6; i >= 0; i--) {
//             var currTime = new Date(endTime - i * 86400000);
//             state.push({
//                 ...baseObj,
//                 "Date": currTime
//             })
//         }
//         dataValues.forEach((element) => {
//             let body = getAggregatedDataBody(element.type, endTime);
//             console.log('IN DATA VALUES, body is:', body)
//             // let params ={
//             //     key: 'CLIENT_SECRET',
//             // }
//             // let headers = {
//             //     authorization: 'Bearer ya29.A0ARrdaM8_Fhgw93mKmGoq-8Qlj-_UP17t77p5…UZHa83StvJLCylKVtSqRjJROji8HNCIf7bJDgp2jMx93OSi1H', Accept: 'application/json'
//             // }
//             // let kpRequestParams = {
//             //     params, headers
//             // }
            
//             console.log('IN DATA VALUES, requestParameters is:', requestParameters)
//             // console.log('IN DATA VALUES, requestParameters is:', kpRequestParams)
//             promises.push(
//                 axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, requestParameters)
//                     .then((resp) => {
//                         // now, each data bucket represents exactly one day
//                         for (let idx = 0; idx < 7; idx++) {
//                             resp.data.bucket[idx].dataset[0].point.forEach((point) => {
//                                 point.value.forEach((val) => {
//                                     let extract = val['intVal'] || Math.ceil(val['fpVal']) || 0;
//                                     state[idx][element.title] += extract;
//                                 })
//                             })
//                         }
//                     }
//                     )
//             )
//         })
//         Promise.all(promises).then(() => {
//             callBack(state);
//         })
//         setReloadCookie();
//     }
// }