const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    getProductBySlug,
    deleteProduct,
    createProduct,
    updateProduct
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);
router.route('/slug/:slug').get(getProductBySlug);

module.exports = router;
