var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');

/* GET users listing. */
router.get('/', authMiddleware.auth, UserController.read);
router.get('/:id', authMiddleware.auth, UserController.readById);
router.post('/', authMiddleware.auth, UserController.signup);
router.patch('/:id', authMiddleware.auth, UserController.update);
router.delete('/:id', authMiddleware.auth, UserController.destroy);

router.post('/signin', UserController.signin);

module.exports = router;
