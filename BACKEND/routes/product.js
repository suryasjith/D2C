const express = require('express');
const router = express.Router();

const { isAdmin, 
        isAuthenticated, 
        isSgnedIn } = require('../controllers/auth')

const { getUserById } = require('../controllers/user')

const { getProductById, 
        createProduct, 
        getProduct, 
        photo, 
        updateProduct, 
        removeProduct, 
        getAllProducts, 
        getAllUniqueCategories } = require('../controllers/product')

//SECTION: all params

router.param('userId', getUserById)
router.param('productId', getProductById)

//SECTION: actual routes
router.post('/product/create/:userId', isSgnedIn, isAuthenticated, isAdmin, createProduct)

//SECTION: read routes
router.get('/product/:productId', getProduct)
router.get('/product/photo/:productId', photo)

//SECTION: update and delete routes
router.put('/product/:productId/:userId', isSgnedIn, isAuthenticated, isAdmin, updateProduct)
router.delete('/product.:productId/:userId', isSgnedIn, isAuthenticated, isAdmin, removeProduct)

//SECTION: listing route with limitednumber
router.get('/products', getAllProducts)

//SECTION: listing categories
router.get('/products/categories', getAllUniqueCategories)

module.exports = router;