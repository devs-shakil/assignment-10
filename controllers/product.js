
const Product = require('../models/product');

//product get
exports.productGet = async(req, res, next) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
    next()
}

//product post
exports.postProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({error: "Invalied Data"})
    }
}

