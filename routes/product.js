const express = require('express');
const { productGet, postProduct } = require('../controllers/product');
const router = express.Router();

//productGet
router.get('/products', productGet);

//product post
router.post('/product', postProduct)
 
module.exports = router

