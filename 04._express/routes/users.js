const express = require('express');
const router = express.Router();

//  -- Get All User Data
router.get('/', (req, res) => {
    res.send('Get All User Data');
});

//  -- Get Singel User Data By ID
router.get('/:id', (req, res) => {
    res.send(`Get Users By ID: ${req.params.id}`);
});

// -- Create User Data
router.post('/', (req, res) => {
    res.send(`Create User`);
});


// -- Update User Data
router.patch('/:id', (req, res) => {
    res.send(`Update User ID: ${req.params.id}`);
});

// -- Delete User Data
router.delete('/:id', (req, res) => {
    res.send(`Delete User ID: ${req.params.id}`);
});

module.exports = router;