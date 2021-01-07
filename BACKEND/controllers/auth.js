const { validationResult } = require('express-validator');
const User = require('../models/user')
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');




//SECTION : Signout
exports.signout = (req, res) => {
    //NOTE : clearing token from cookies
    res.clearCookie("token");
    res.json({
        message : "user signed out"
    })    
};

//SECTION : Signin
exports.signin = (req, res) => {

    const { email, password } = req.body;

    //NOTE : validation error message
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    //NOTE : Checking mail and password of user
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Email not registered"
            })
        }
        if (!user.authenticate(password)) { 
            return res.status(401).json({
                error: "Incorrect password for the given user id"
            })
        }
        //NOTE : creating token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);

        //NOTE : put token in cookie and setting its lifespan
        res.cookie("token", token, { expire: new Date() + 9999 })

        //NOTE : sending response to frontend
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } })
    })
};



// SECTION: signup //
exports.signup = (req, res) => {

    //NOTE : validation error message
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    //NOTE: saving to database
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "Not able to save user in DB"
            })
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        })
    })
};

//SECTION :protected routes and custom middle wares 


//NOTE: protected routes ...its also a middleware 
//..it doesnt has a next because it has expressJWT
exports.isSgnedIn = expressJwt({
    secret : process.env.SECRET,
    userProperty : "auth"
})

//NOTE : custom middleware to check user has authentication
exports.isAuthenticated = (req , res , next) => {
    let checker = req.profile && req.auth && req.profile._id == req.auth._id
    if (!checker){
        return res.status(403).json({
            error : "Access denied"
        })
    }
    next();
}
//NOTE : custom middleware to check user has admin privilage...
exports.isAdmin = (req, res , next) =>{
    if (req.profile.role === 0) {
        return res.status(403).json({
            error : "Access denied ,  permited section for admins only"
        })
    }
    next();
}
