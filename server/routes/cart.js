const express = require('express');
const { addCart, getCart, deleteCart } = require('../controllers/cartController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');
const router = express.Router();


router.post('/add-cart', checkLogin, addCart);

router.get('/cart/:user_id', checkLogin, getCart);

router.delete('/delete-cart/:id', checkLogin, deleteCart);


module.exports = router;