const express = require('express');
const router = express.Router();

const { isAdmin,
    isAuthenticated,
    isSgnedIn } = require('../controllers/auth')
const { getUserById, pushOrderInPurchaseList } = require('../controllers/user')
const { updateStock } = require('../controllers/product')

const { getOrderByID, createOrder, getAllOrders,  getOrderStatus,updateStatus} = require('../controllers/order')

//SECTION : params
router.param('userId', getUserById)
router.param('orderId', getOrderByID)


//SECTION : create
router.post('/order/create/:userId',
    isSgnedIn,
    isAuthenticated,
    pushOrderInPurchaseList,
    updateStock,
    createOrder
    );

//SECTION : read
router.get('/order/all/:userId',isSgnedIn,isAuthenticated,isAdmin,getAllOrders)

//SECTION : Order status
router.get('/order/status/:userId',isSgnedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put('/order/:orderId/status/:userId' , isSgnedIn,isAuthenticated,isAdmin,updateStatus)

module.exports = router;

