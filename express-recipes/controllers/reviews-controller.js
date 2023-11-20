const Recipe = require('../models/recipe-model')

module.exports = {
    create,
}

async function create (req, res) {
    // res.send(req.body)
    try {
        for (const property in req.body) {
            if (!req.body[property]) {
                delete req.body[property]
            }
        }
        const recipe = await Recipe.findById(req.params.id)
        recipe.comments.push(req.body)
        recipe.save()
        res.redirect(`/recipes/${req.params.id}`)
    } catch (err) {
        console.error(err)
    }
}