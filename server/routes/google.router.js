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

router.get('/steps', async (req, res) => {
    const queryUrl = new urlParse(req.url);
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
    res.send('HELLO');

    let stepArray = [];

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
                    try {
                        console.log("trying post");

                        let queryText = `INSERT INTO "steps" ("user_id", "steps", "date") VALUES ('1', $1, '2022-03-18');`;

                        pool.query(queryText, [steps.value[0].intVal])
                            // .then(result => {
                            //     res.sendStatus(201);
                            // })
                            // .catch(error => {
                            //     console.log(`Error adding steps`, error);
                            //     res.sendStatus(500);
                            // });
                        // axios.post(`/api/google/steps/database`, steps.value[0])
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

// POST route - adding hatched floof to flock
router.post('/steps/database', (req, res) => {
    let stepsToAdd = req.body.intVal;
    console.log('steps here!', stepsToAdd);

    let queryText = `INSERT INTO "steps" ("user_id", "steps", "date") 
    // VALUES ("new-user", $1, 2022-03-18);`;

    pool.query(queryText, [stepsToAdd])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding steps`, error);
            res.sendStatus(500);
        });
}); // end POST route


// ------------
module.exports = router;