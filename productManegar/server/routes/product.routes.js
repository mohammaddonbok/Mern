const productController = require("../controllers/product.controllers");

module.exports = app =>{
    app.post("/api/newProduct/",productController.createProduct);
    app.get("/api/findAll/",productController.findAllProducts);
};
