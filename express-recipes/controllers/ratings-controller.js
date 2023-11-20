const Recipe = require('../models/recipe-model')

module.exports = {
    create
}

async function create(req,res) {
    const rating = await Recipe.findById(req.params.id)
    try{
        rating.ratings.push(req.body)
        await rating.save()
        res.redirect(`/recipes/${rating._id}`)
    }catch(err){
        console.log(err)
    }
}