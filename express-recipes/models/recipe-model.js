const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    comments: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)