const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');



router.get('/search', productController.findProductById);

router.post('/create', productController.createProduct);

router.patch('/:id', productController.updateProduct);





module.exports = router;