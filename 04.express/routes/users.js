const express = require('express');
const router = express.Router();

// -- Get All User Data
router.get('/', (req, res) => {
    res.send('Get all Users Data');
});

// -- Get SInggel User Data By ID
router.get('/:id', (req, res) => {
    res.send(`Get User By ID: ${req.params.id}`);
});

// -- Create User Data
router.post('/', (req, res) => {
    res.send(`Create User`);
});

// -- Update User Data
router.patch('/:id', (req, res) => {
    res.send(`Update User: ${req.params.id}`);
});

// -- Delete User Data
router.delete('/:id', (req, res) => {
    res.send(`Delete User: ${req.params.id}`);
});

module.exports = router;