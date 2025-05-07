const express = require('express');
const { getAllProducts, getAllProductsAdmin , addProduct, updateProduct, deleteProduct, addProductImage, deleteProductImage, filterSearchProduct, getUserAuct, addAuctioneerBoard } = require('../controllers/productController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');

const router = express.Router();

router.post('/add-product-image/:product_id', checkLogin, checkAdmin, addProductImage);

router.delete('/delete-product-image/:product_id', checkLogin, checkAdmin, deleteProductImage);

router.get('/products/:number', getAllProducts);

router.get('/products-admin', getAllProductsAdmin, checkLogin, checkAdmin);

router.post('/add-product', checkLogin, checkAdmin, addProduct);

router.put('/update-product/:product_id', checkLogin, checkAdmin, updateProduct);

router.delete('/delete-product/:product_id', checkLogin, checkAdmin, deleteProduct);

router.post('/filter-search', filterSearchProduct);

router.get('/user-auct/:user_id', checkLogin, getUserAuct);

router.post('/add-auctioneer-board', checkLogin, addAuctioneerBoard);

module.exports = router;