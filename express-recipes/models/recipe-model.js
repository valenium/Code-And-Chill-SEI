const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
	{
		name: { type: String, default: 'anonymous' },
		body: { type: String, required: true },
	},
	{ timestamps: true }
)
const ratingSchema = new Schema ({
    score: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }
},{
    timestamps: true
})

const recipeSchema = new Schema ({
    name: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner'],
        default: 'Breakfast'
    },
    description: {
        type: String,
    },
    instructions: {
        type: [String],
    },
    ingredients: {
        type: [String],
    },
    comments: [reviewSchema],

    ratings: [ratingSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
