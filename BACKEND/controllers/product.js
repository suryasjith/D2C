const Product = require('../models/product')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')



exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
        .populate("category")
        .exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Couldnt find Product"
                })
            }
            req.product = product
            next()
        })
}

//SECTION : creating product with image
exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "Unsupported image"
            })
        }
        //NOTE : destructure the fields
        const { price, name, description, category, stock } = fields
        if (
            !name || !price || !description || !category || !stock
        ) {
            return res.status(400).json({
                error: "Please fill every field"
            })
        }
        let product = new Product(fields)
        //NOTE : handle the file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.statua(400).json({
                    error: "Image size too large"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
        }
        //NOTE :  saving to db
        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Couldnt Save item"
                })
            }
            res.json(product)
        })
    })
}
//SECTION : getting single product
exports.getProduct = (req, res) => {
    req.product.photo = undefined
    return res.json(req.product)
}
//NOTE :middleware for bringing photo
exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType)
        return res.send(req.product.photo.data)
        next()
    }
}
//SECTION : update product
exports.updateProduct = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "Unsupported image"
            })
        }
        //NOTE: core part of updation
        let product = req.product
        product = _.extend(product, fields)
        //NOTE : handle the file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "Image size too large"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
        }
        //NOTE :  saving to db
        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Couldnt update item in updateProduct"
                })
            }
            res.json(product)
        })
    })
}
//SECTION : delete product
exports.removeProduct = (req, res) => {
    let product = req.product
    product.remove((err, product) => {
        if (err) {
            return res.status(400).json({
                error: `Failed to delete ${product.name} in removeProduct`
            })
        }
        res.json({
            message: `${product.name} was deleted succesfully`
        })
    })
}
//SECTION : getting all products with conditions
exports.getAllProducts = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8 //NOTE :  passing the limit from frontend
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id" //NOTE : sorting from front end
    Product.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, 'asc']])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: "No products found on getallproducts"
                })
            }
            res.json(products)
        })
}



exports.getAllUniqueCategories = (req, res) => {
    Product.distinct("category",{},(err,category) => {
        if(err){
            return res.status(400).json({
                error  : " No category found"
            })
        }
        res.json(category)
    })
}
//SECTION : updating stock for inventory management
exports.updateStock = (req, res, next) => {
    let myOperations = req.body.order.product.map(prod => {
        return {
            updateOne: {
                filter: { _id: prod._id },
                update: { $inc: { stock: -prod.count, sold: +prod.count } }
            }
        }
    })
    Product.bulkWrite(myOperations, {}, (err, products) => {
        if (err) {
            return res.status(400).json({
                error: "Bulk operation failed"
            })
        }
        next()
    })
}

