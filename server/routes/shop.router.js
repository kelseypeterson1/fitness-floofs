const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// PUT route - new background purchased - update flock background 
router.put('/:id', (req, res) => {
    console.log('req.body in PUT request is', req.body);

    let idToUpdate = req.params.id;
    console.log('idToUpdate is', idToUpdate);

    let sqlText = req.body.text
    console.log('text is', req.body.text);

    let sqlValues = [idToUpdate];

    pool.query(sqlText, sqlValues)
        .then(result => {
            console.log('database processed PUT request', result)
            res.sendStatus(200);
        }).catch(err => {
            console.log('database was not updated for PUT request', err)
            res.sendStatus(500);
        })
}) // END PUT Route

// PUT route - change background selected
router.put('/select/:id', (req, res) => {
    console.log('req.body in PUT request is', req.body);

    let idToUpdate = req.params.id;
    console.log('idToUpdate is', idToUpdate);

    let backgroundSelected = req.body.background;
    console.log('background selected id is', backgroundSelected);

    let sqlText = `
        UPDATE "shop"
        SET "background_selected" = $2
        WHERE user_id = $1;
    `

    let sqlValues = [idToUpdate, backgroundSelected];

    pool.query(sqlText, sqlValues)
        .then(result => {
            console.log('database processed PUT request', result)
            res.sendStatus(200);
        }).catch(err => {
            console.log('database was not updated for PUT request', err)
            res.sendStatus(500);
        })
}) // END PUT Route

// GET route - gets all columns from shop table
router.get('/:id', (req, res) => {
    let userId = req.params.id;
    const query = `SELECT * FROM "shop" WHERE "user_id" = $1;`;
    pool.query(query, [userId])
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log(`Error getting shop items from DB`, error);
            res.sendStatus(500);
        });
}); // END GET route

// POST route - when a new user registers, this will create a row for them in the db
router.post('/:id', (req, res) => {
    let idToUpdate = req.params.id;
    console.log(`Adding new row for new user`, idToUpdate);

    let queryText = `INSERT INTO "shop" ("user_id") VALUES ($1);`;

    pool.query(queryText, [idToUpdate])
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log(`Error adding feedback`, error);
            res.sendStatus(500);
        });
}); // end POST route

module.exports = router;
