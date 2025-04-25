const express = require('express');
const { addOrder, getAllOrders, getOrderByUser, updateOrderStatus, deleteOrder } = require('../controllers/orderController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');
const router = express.Router();

router.post('/add-order', checkLogin, checkAdmin, addOrder);

router.get('/get-all-orders', checkLogin, checkAdmin, getAllOrders);

router.get('/get-order-by-user/:user_id', checkLogin, getOrderByUser);

router.put('/update-order-status/:order_id', checkLogin, checkAdmin, updateOrderStatus);

router.delete('/delete-order/:order_id', checkLogin, checkAdmin, deleteOrder);

module.exports = router;
