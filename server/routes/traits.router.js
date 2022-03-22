const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET traits for new floof from db
router.get('/', (req, res) => {
    const query = `SELECT * FROM "traits";`;
    pool.query(query)
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log(`Error getting personality traits from DB`, error);
            res.sendStatus(500);
        });
});

module.exports = router;