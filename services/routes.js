const express = require('express');
const router = express.Router();
const students = require('./students');

// GET all students data. 
router.get('/', async function(req, res, next) {
  try {
    res.json(await students.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting students data `, err.message);
    next(err);
  }
});

// GET student data by id.
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await students.getData(req.params.id));
    } catch (err) {
      console.error(`Some problems getting data`, err.message);
      next(err);
    }
  });

// POST create new students data.
router.post('/', async function(req, res, next) {
    try {
      res.json(await students.create(req.body));
    } catch (err) {
      console.error(`Error while inserting data`, err.message);
      next(err);
    }
  });

// POST update students data.
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await students.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error updating data`, err.message);
      next(err);
    }
  });

// DELETE student data by id.
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await students.remove(req.params.id));
    } catch (err) {
      console.error(`Some problems for remove data`, err.message);
      next(err);
    }
  });

module.exports = router;