const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET egg for user from db
router.get('/:id', (req, res) => {
  let userId = req.params.id;
  const query = `SELECT * FROM "egg" WHERE "user_id" = $1;`;
  pool.query(query, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting egg from DB`, error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

// PUT route - change egg status
router.put('/:id', (req, res) => {
  // console.log('req.body in PUT request is', req.body);
  // console.log('steps are', req.body.stepsDetail.steps)
  const steps = req.body.stepsDetail.steps

  // check what egg status should be
  function checkStatus(steps) {
    if (steps > 10000) {
      return 3;
    } else if (steps > 5000) {
      return 2;
    } else {
      return 1;
    }
  }
  const status = checkStatus(steps)
  // console.log('status is:', checkStatus(steps))

  let idToUpdate = req.params.id;
  // console.log('idToUpdate is', idToUpdate);

  // let eggStatus = req.body.eggDetail.status;

  let sqlText = `
      UPDATE "egg"
      SET "status" = $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, status];

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
