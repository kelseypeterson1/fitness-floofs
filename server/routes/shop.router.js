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
  });

module.exports = router;
