var express = require('express');
var router = express.Router();

/* GET all apps data. */
router.get('/', function (req, res, next) {
    res.send('View apps data');
});

// GET apps by ID
router.get('/:id', function (req, res, next) {
    res.send(`View apps by id - ${req.params.id}`);
});

// POST create new apps
router.post('/', function (req, res, next) {
    res.send('Create new apps');
});

// PATCH edit apps
router.patch('/:id', function (req, res, next) {
    res.send(`Edit apps id - ${req.params.id}`);
});

// DELETE delete apps
router.delete('/:id', function (req, res, next) {
    res.send(`Delete apps id - ${req.params.id}`);
});

module.exports = router;