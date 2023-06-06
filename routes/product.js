const express = require('express');
const { Product } = require('../controllers/product');
const router = express.Router();


router.get('/products', Product)

