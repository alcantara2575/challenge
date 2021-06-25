const express = require('express');
const router = express.Router();
const students = require('./students');

/* GET students data. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await students.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting students data `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await students.create(req.body));
    } catch (err) {
      console.error(`Error while inserting data`, err.message);
      next(err);
    }
  });

module.exports = router;