const { request } = require("express");
const products = require("../models/product.models");


module.exports.createProduct = (req, res) => {
    const {title,price,description}= req.body;
    products.create({title,price,description})
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllProducts = (req, res) => {
    products.find()
        .then(allProd => res.json({ allProd }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};