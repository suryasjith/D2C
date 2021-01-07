const express = require('express')
const router = express.Router();


const { getUserById, getUser , updateUser, userPurchaseList} = require('../controllers/user');
const { isSgnedIn, isAuthenticated } = require('../controllers/auth');

router.param('userId', getUserById)

router.get('/user/:userId',isSgnedIn,isAuthenticated,getUser)

router.put('/user/:userId',isSgnedIn,isAuthenticated,updateUser)

router.get('/orders/user/:userId',isSgnedIn,isAuthenticated,userPurchaseList)

module.exports = router;
