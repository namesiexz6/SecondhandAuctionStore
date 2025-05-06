const express = require('express');
const { getAllProducts, addProduct, updateProduct, deleteProduct, addProductImage, deleteProductImage, filterSearchProduct, getAuctioneerBoard, addAuctioneerBoard } = require('../controllers/productController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');

const router = express.Router();

router.post('/add-product-image/:product_id', checkLogin, checkAdmin, addProductImage);

router.delete('/delete-product-image/:product_id', checkLogin, checkAdmin, deleteProductImage);

router.get('/products/:number', getAllProducts);

router.post('/add-product', checkLogin, checkAdmin, addProduct);

router.put('/update-product/:product_id', checkLogin, checkAdmin, updateProduct);

router.delete('/delete-product/:product_id', checkLogin, checkAdmin, deleteProduct);

router.post('/filter-search', filterSearchProduct);

router.get('/auctioneer-board/:product_id', getAuctioneerBoard);

router.post('/add-auctioneer-board', checkLogin, addAuctioneerBoard);

module.exports = router;