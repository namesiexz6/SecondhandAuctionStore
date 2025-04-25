const express = require('express');
const { getAllUsers, updateUser, deleteUser, changeUserRole } = require('../controllers/userController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');
const router = express.Router();

router.get('/get-all-users', checkLogin, checkAdmin, getAllUsers);

router.post('/update-user/:id', checkLogin, updateUser);

router.delete('/delete-user/:id', checkLogin, checkAdmin, deleteUser);

router.patch('/change-user-role/:id', checkLogin, checkAdmin, changeUserRole);

module.exports = router;