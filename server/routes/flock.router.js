const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET flock for user from db
router.get('/:id', (req, res) => {
  let userId = req.params.id;
  const query = `SELECT * FROM "flock" WHERE "user_id" = $1 ORDER BY "id";`;
  pool.query(query, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting flock from DB`, error);
      res.sendStatus(500);
    });
}); // END GET route


// PUT route - rename floof
 router.put('/:id', (req, res) => {
  console.log('req.body in PUT request is', req.body);

  let idToUpdate = req.params.id;
  console.log('idToUpdate is', idToUpdate);

  let newName = req.body.newName;
  console.log('newName is', newName);
  
  let sqlText = `
      UPDATE "flock"
      SET "name" = $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, newName];

  pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('database processed PUT request', result)
      res.sendStatus(200);
    }).catch(err => {
      console.log('database was not updated for PUT request', err)
      res.sendStatus(500);
    })
}) // END PUT Route

// DELETE route - releasing floof
router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete ID', reqId);
  let queryText = 'DELETE FROM "flock" WHERE id = $1;'
  pool.query(queryText, [reqId])
    .then((result) => {
      console.log('floof deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making database query', queryText, error);
      res.sendStatus(500);
    })
}) // end DELETE route

module.exports = router;
