const express = require('express');
const { getAllProducts, addProduct, updateProduct, deleteProduct, addProductImage, deleteProductImage, filterSearchProduct, getAuctioneerBoard, addAuctioneerBoard } = require('../controllers/productController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');

const router = express.Router();

router.post('/add-product-image/:product_id', checkLogin, checkAdmin, addProductImage);

router.delete('/delete-product-image/:product_id', checkLogin, checkAdmin, deleteProductImage);

router.get('/products', getAllProducts);

router.post('/add-product', checkLogin, checkAdmin, addProduct);

router.put('/update-product/:product_id', checkLogin, checkAdmin, updateProduct);

router.delete('/delete-product/:product_id', checkLogin, checkAdmin, deleteProduct);

router.get('/filter-search', filterSearchProduct);

router.get('/auctioneer-board', getAuctioneerBoard);

router.post('/add-auctioneer-board', addAuctioneerBoard);

module.exports = router;