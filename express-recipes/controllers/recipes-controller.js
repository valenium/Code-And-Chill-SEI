const { MongoDriverError } = require('mongodb')
const Recipe = require('../models/recipe-model')

module.exports = {
	new: newRecipe,
	create,
	index,
	show,
    update,
    edit,
    delete: deleteRecipe,
}

function newRecipe(req, res) {
	// res.send('New Recipe Page')

	res.render('recipes/new', {
		title: 'Add New Recipe',
		errorMsg: '',
	})
}
async function create(req, res) {
	// res.send('New Recipe Page')
    if(req.body.ingredients) req.body.ingredients = req.body.ingredients.split(/\s*,\s*/)
    if(req.body.instructions) req.body.instructions = req.body.instructions.split(/\s*,\s*/)
	try {
		await Recipe.create(req.body)
		res.redirect('/recipes')
	} catch (err) {
        console.log(err)
	}
}
async function index(req, res) {
    // res.send('all recipes')
	try {
        const recipes = await Recipe.find()
		res.render('recipes/index', { title: 'All Recipes', recipes })
	} catch (err) {
        console.log(err)
	}
}

async function show(req, res) {
	try {
		const recipe = await Recipe.findById(req.params.id)
		// res.send(recipe)
		res.render('recipes/show', { title: 'Recipe Details', recipe })
	} catch (err) {
		console.log(err)
	}
}

async function update(req,res){
    try{
        await Recipe.findById(req.params.id)
        await Recipe.findOne(req.body)
        await Recipe.updateOne({_id: req.params.id}, {$set: req.body})
        res.redirect(`/recipes/${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

async function edit(req,res){
    try {
        const recipe = await Recipe.findById(req.params.id)
        res.render('recipes/edit', { title: 'Edit Recipe', recipe})
    } catch (err) {
		console.log(err)
	}
}

async function deleteRecipe(req,res) {
try{
    await Recipe.findByIdAndDelete(req.params.id)
    res.redirect('/recipes')
}catch(err){
    console.log(err)
}
}
