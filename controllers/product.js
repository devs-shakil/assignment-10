const Product = require('../models/product');

exports.Product = async(req, res) =>{
    try {
        const products = await Product.find({}, 'name price');
        res.json(products);
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}