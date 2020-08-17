
const {
    NotFoundInCatch,
    error500,
    error404,
    error422
} = require("../lib/error");
const {
    getAllResponse,
    createResponse,
    deleteResponse,
    response
} = require("../lib/response");

// Load in the mongoose models
const { Category, Product } = require('../db/models');

/**
* Purpose: Create a new product
*/

const createProduct = (req, res, next) => {
    // We want to create a new product 

        let newProduct = new Product({
            name: req.body.name,
            quantity: req.body.description,
            costPrice: req.body.price,
            sellingPrice: category._id
        });
        newProduct.save().then((newProductDoc) => {
            //res.send(newProductDoc);
            createResponse(res, newProductDoc);
        })
    }).catch(err => {
        error422(res, err);
        error500(
            res,
            err.message || "Some error occurred while creating the product."
        );
    });
};

/**
* Purpose: Get all products by speacific quary
*/
const findProductsByQuary = (req, res, next) => {

    

    Product.find({
        name: req.quary.q
    }).then((products) => {
            //res.send(products);
            getAllResponse(res, products);
        }).catch(err => {
            error500(
                res,
                err.message || "Some error occurred while retrieving products."
            );
        });
};

/**
* Purpose: Update a specified product
*/

const updateProduct = (req, res, next) => {
    // We want to update an existing product (specified by productId)

    Product.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        //res.send({ 'message': 'updated successfully'});
        response(res, "Product updated successfully!");
    }).catch(err => {
        NotFoundInCatch(res, err, `Product not found with id ${err.value}`);
        error500(res, `Error updating product with id ${err.value}`);
    });
};

module.exports = {
    findProductsByCategory,
    createProduct,
    updateProduct,
   
};

