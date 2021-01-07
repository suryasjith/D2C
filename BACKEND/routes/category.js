const express = require('express')
const router = express.Router();

const { getCategoryId, 
        createCategory, 
        getCategory, 
        getAllCategory, 
        updateCategory, 
        removeCategory } = require('../controllers/category')

const { isSgnedIn, 
        isAuthenticated, 
        isAdmin } = require('../controllers/auth')
        
const { getUserById } = require('../controllers/user')

//NOTE : params
router.param('userId', getUserById)
router.param('categoryId', getCategoryId);

//NOTE: actual routes
router.post('/category/create/:userId', isSgnedIn, isAuthenticated, isAdmin, createCategory)

//SECTION : read routes
router.get('/category/:categoryId', getCategory)
router.get('/categories', getAllCategory)

//SECTION : update routes
router.put('/category/:categoryId/:userId', isSgnedIn, isAuthenticated, isAdmin, updateCategory)


//SECTION : delete routes
router.delete('/category/:categoryId/:userId', isSgnedIn, isAuthenticated, isAdmin, removeCategory)


module.exports = router;