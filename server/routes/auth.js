const express = require('express');
const { Register, LoginUser, LoginGoogle, CurrentUser ,LogoutUser} = require('../controllers/authController');
const { checkLogin, checkAdmin } = require('../middlewares/auth');

const router = express.Router();
    
// Route for user registration
router.post('/register', Register);

// Route for user login
router.post('/login', LoginUser);

router.post('/login/google', LoginGoogle);

router.post('/current-user', checkLogin, CurrentUser);

router.post('/current-admin', checkLogin, checkAdmin, CurrentUser);

router.post('/logout', LogoutUser);

module.exports = router;