var express = require ('express');
var router = express.Router();
const { signout , signup , signin, isSgnedIn } = require ('../controllers/auth')
const { check } = require('express-validator');

//NOTE : method with express validation for signup
router.post("/signup",[
check('name').isLength({min : 3}).withMessage('Name should contain minimum 3 letter') ,
check('email').isEmail().withMessage('Incorrect Email Format'),
check('password').isLength({ min: 5 }).withMessage('password must be at least 6 chars long')
],signup);

//NOTE : method with express validation for signin
router.post("/signin",[
check('email').isEmail().withMessage('Email is required'),
check('password').isLength({ min: 5 }).withMessage('password required')
],signin);



router.get("/signout" , signout);


router.get("/testroute" ,isSgnedIn,(req,res) =>{
    res.json (req.auth)
})

module.exports = router ;