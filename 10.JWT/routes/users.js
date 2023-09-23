var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', UserController.read);
router.get('/:id', UserController.readById);
router.post('/', UserController.signup);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
router.post('/signin', UserController.signin);

module.exports = router;
