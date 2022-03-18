const axios = require('axios');
require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const request = require('request');
const urlParse = require('url-parse');
const queryParse = require('query-string');
const router = express.Router();
const pool = require('../modules/pool');

// --------------- GOOGLE API ---------------

// --------------- GET INFO FROM GOOGLE FITNESS ---------------

// triggering authorization screen for user
router.get('/', (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        //client id
        `${process.env.REACT_APP_CLIENT_ID}`,
        //client secret
        `${process.env.REST_API_KEY}`,
        //link to redirect to
        "http://localhost:5000/api/google/steps"
    )
    const scopes = ["https://www.googleapis.com/auth/fitness.activity.read profile email openid"]

    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        state: JSON.stringify({
            callbackUrl: req.body.callbackUrl,
            userID: req.body.userid
        })
    })

    request(url, (err, response, body) => {
        console.log('error:', err);
        console.log('statusCode:', response && response.statusCode);
        res.send({ url });
    })
})

// getting steps from google
// req is sent from google
router.get('/steps', async (req, res) => {
    const queryUrl = new urlParse(req.url);
    // console.log('req.user is', req.user)
    const code = queryParse.parse(queryUrl.query).code;
    const oauth2Client = new google.auth.OAuth2(
        //client id
        `${process.env.REACT_APP_CLIENT_ID}`,
        //client secret
        `${process.env.REST_API_KEY}`,
        //link to redirect to
        "http://localhost:5000/api/google/steps"
    )

    const tokens = await oauth2Client.getToken(code);
    // console.log(tokens)

    

    
    
    res.send('Google Login Confirmed');
    
    let stepArray = [];
    
    // get date data for the db
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${year}-${month}-${day}`;
    console.log(fullDate);
    
    try {
        const result = await axios({
            method: 'POST',
            headers: {
                // authorization: 'Bearer ' + 'ya29.A0ARrdaM_eUqURJb2cT8BQn064O5BTy6vj7T87dqjsPCFBtG5-mIkPfkfdnRZNRutyyLtH13x6baD_8l0qiB_h1CXGAu4lnMNXa46lF7OtC6_ccFYee4FCOy8HRk_EkJO5I2-lu6Xeb5H_Ade8VmCWpSgz4NWR'
                authorization: 'Bearer ' + tokens.tokens.access_token
            },
            'Content-Type': 'application/json',
            url: `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
            data: {
                aggregateBy: [
                    {
                        dataTypeName: 'com.google.step_count.delta',
                        dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps'
                    }
                ],
                bucketByTime: { durationMillis: 86400000 },
                startTimeMillis: 1646105560790,
                endTimeMillis: 1647206660790,
            }
        })
        // console.log(result)
        stepArray = result.data.bucket
    } catch (err) {
        console.log(err)
    }
    try {
        for (const dataSet of stepArray) {
            // console.log(dataSet);
            for (const points of dataSet.dataset) {
                // console.log(points)
                for (const steps of points.point) {
                    console.log(steps.value)
                    
                    // posting steps to database
                    try {
                        console.log("trying post");
                        let queryText = `UPDATE "steps" SET "steps" = $1, "date" = $2 WHERE "user_id" = $3;`;
                        pool.query(queryText, [steps.value[0].intVal, fullDate, req.user.id])
                    } catch {
                        console.log("error connecting")
                    }
                }
            }
        }
    } catch (err) {
        console.log(err)
    }
})


// ------------
module.exports = router;