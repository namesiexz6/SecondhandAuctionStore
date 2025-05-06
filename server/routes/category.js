const express = require('express');
const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { checkLogin, checkAdmin} = require('../middlewares/auth');
const router = express.Router();

router.post('/add-category', checkLogin, checkAdmin, addCategory);

router.get('/get-all-categories', getAllCategories);

router.put('/update-category/:category_id', checkLogin, checkAdmin, updateCategory);

router.delete('/delete-category/:category_id', checkLogin, checkAdmin, deleteCategory);

module.exports = router;