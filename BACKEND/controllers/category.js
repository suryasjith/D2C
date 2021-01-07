const Category = require('../models/category')


exports.getCategoryId = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if (err) {
            return res.status(400).json({
                error: "Category not found"
            })
        }
        req.category = cate
        next()
    })
}
//NOTE : creating category
exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to save category"
            })
        }
        res.json({ category })
    })
}
//NOTE : getting categories to the frontend
exports.getCategory = (req, res) => {
    return res.json(req.category)
}
//NOTE : getting all the categories to the front end
exports.getAllCategory = (req, res) => {
    Category.find().exec((err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Categories not found"
            })
        }
        res.json(categories)
    }
    )
}
//NOTE : updating category
exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name
    category.save((err, updatedCategory) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to update category"
            })
        }
        res.json(updatedCategory)
    })
}
//NOTE : deleting a category
exports.removeCategory = (req, res) => {
    const category = req.category
    category.remove((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to delete category"
            })
        }
        res.json({
            message: `Successfully deleted "Category" : "${category.name}"`
        })
    })
}