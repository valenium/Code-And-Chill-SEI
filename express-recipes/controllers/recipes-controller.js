const Recipe = require('../models/recipe-model')

module.exports = {
    new: newRecipe,
    //create,
    //index,
    //show
}

function newRecipe(req,res) {
    res.send('New Recipe Page')

    //res.render('recipes/new', {
        // title: 'Add New Recipe',
        // errorMsg: ''
    // })
}