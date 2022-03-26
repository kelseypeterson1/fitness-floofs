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

module.exports = router;
