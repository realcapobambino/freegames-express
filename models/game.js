const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    id: {
        type: int
    },
    title: {
        type: String
    },
    short_description: {
        type: String
    },
    genre: {
        type: String
    },
    platform: {
        type: String
    },
    publisher: {
        type: String
    },
    release_date: {
        type: Date
    }
})

module.exports = mongoose.model('Game', gameSchema)