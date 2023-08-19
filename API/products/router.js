const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct ,deleteProduct,updateProduct } = require('./controller'); // Fixed typo addproduct to addProduct

// getALLProducts
router.get('/products', getAllProducts); 

// addProducts
router.post('/addproduct', addProduct); 
router.put('/update-product', updateProduct);
router.delete('/delete-product', deleteProduct);


module.exports = router;