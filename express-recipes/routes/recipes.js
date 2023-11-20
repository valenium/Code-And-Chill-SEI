const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes-controller')

/* GET users listing. */

router.get('/', recipesCtrl.index)

router.post('/', recipesCtrl.create)

router.get('/new', recipesCtrl.new)

router.put('/:id', recipesCtrl.update)

router.get('/:id', recipesCtrl.show)
router.delete('/:id', recipesCtrl.delete)

router.get('/:id/edit', recipesCtrl.edit)

module.exports = router;
