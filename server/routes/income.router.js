const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// PUT route - update user's coin balance
router.put('/:id', (req, res) => {
    console.log('req.body in PUT request is', req.body);
  
    let userIdToUpdate = req.params.id;
    console.log('userIdToUpdate is', userIdToUpdate);
  
    let income = req.body.floof.income;
    console.log('income is', income);
    
    let sqlText = `
        UPDATE "coins"
        SET "coins" = "coins" + $2
        WHERE user_id = $1;
    `
    let sqlValues = [userIdToUpdate, income];
  
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