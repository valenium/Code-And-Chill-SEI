const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes-controller')

/* GET users listing. */
router.get('/new', recipesCtrl.new)

//router.post('/', recipesCtrl.create)

//router.get('/', recipesCtrl.index)

//router.get('/:id', recipesCtrl.show)

module.exports = router;
