const express = require('express')
const router = express.Router();

const ratingsCtrl = require('../controllers/ratings-controller')

router.post('/recipes/:id/ratings', ratingsCtrl.create)

module.exports = router;