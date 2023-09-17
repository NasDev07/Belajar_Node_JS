var express = require('express');
var router = express.Router();

/* GET all users data. */
router.get('/', function(req, res, next) {
  res.send('View user all data');
});

// GET user by ID
router.get('/:id', function(req, res, next) {
  res.send(`View user by id - ${req.params.id}`);
});

// POST create new user
router.post('/', function(req, res, next) {
  res.send('Create new user');
});

// PATCH edit new user
router.patch('/:id', function(req, res, next) {
  res.send(`Edit user id - ${req.params.id}`);
});

// DELETE delete user
router.delete('/:id', function(req, res, next) {
  res.send(`Delete user id - ${req.params.id}`);
});

module.exports = router;
