const express = require('express');
const { getAllUsers, UpdateUser } = require('../controllers/user');
const { route } = require('./auth');

const router = express.Router();

router.get('/getAll-users', getAllUsers);

router.post('/update-user/:id', UpdateUser);

module.exports = router;