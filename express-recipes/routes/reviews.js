const express = require('express')
const reviewsCtrl = require('../controllers/reviews-controller.js')
const router = express.Router()

router.post('/recipes/:id/comments', reviewsCtrl.create)

module.exports = router
