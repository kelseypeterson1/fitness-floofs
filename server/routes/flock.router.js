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

// PUT route - randomize personality for floof
 router.put('/randomize/:id', (req, res) => {
  console.log('req.body in PUT request is', req.body);

  let idToUpdate = req.params.id;
  console.log('idToUpdate is', idToUpdate);

  let newPersonality = req.body.newPersonality;
  console.log('newPersonality is', newPersonality);
  
  let sqlText = `
      UPDATE "flock"
      SET "personality" = $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, newPersonality];

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

// POST route - adding hatched floof to flock
router.post('/', (req, res) => {
  let newFloof = req.body;
  console.log(`Adding new floof`, newFloof);

  let queryText = `INSERT INTO "flock" ("floof_id", "user_id", "name", "personality", "birthday", "income") 
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id";`;

  pool.query(queryText, [newFloof.floof_id, newFloof.user_id, newFloof.name, newFloof.personality, newFloof.birthday, newFloof.income])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error adding feedback`, error);
      res.sendStatus(500);
    });
}); // end POST route

module.exports = router;
