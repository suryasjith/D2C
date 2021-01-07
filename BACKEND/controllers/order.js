const { Order, ProductCart } = require('../models/order')

exports.getOrderByID = (req,res,next,id) => {
    Order.findById(id)
    .populate('products.product',"name price") //never put comma in between keys
    .exec((err,order) => {
        if(err){
            return res.status(400).json({
                error : "Order Not Found in get by id"
            })
        }
        req.order = order 
        next()
    })
}
//SECTION : create order
exports.createOrder = (req,res) => {
    req.body.order.user = req.profile
    const order = new Order(req.body.order)
    order.save((err,order)=>{
        if(err){
            return res.status(400).json({
                error : "Failed to save your order in db"
            })
        }
        res.json(order)
    })
}
// SECTION : getting all orders per user
exports.getAllOrders = (req,res) =>{
    Order.find()
    .populate("user" , "_id name")
    .exec((err,order) => {
        if(err){
            return res.status(400).json({
                error : "Failed to get all orders"
            })
        }
        res.json(order)
    })
}
//SECTION : to know the status of the order
exports.getOrderStatus = (req,res) => {
    res.json(Order.schema.path('status').enumValues)
}
//SECTION : to change the status of the order
exports.updateStatus = (req,res) => {
    Order.updateOne(
        {_id : req.body.orderId},
        {$set : {status : req.body.status}},
        (err,order)=> {
            if(err){
                return res.status(400).json({
                    error : "Failed to update order status"
                })
            }
            res.json(order)
        }
    )
}