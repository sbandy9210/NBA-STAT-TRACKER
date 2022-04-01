const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Players = new Schema(
    {
        // team: {type: String, required: true},
        name: {type: String, required: true},
        position: {type: String, required: true},
        ppg: {type: Number, required: true},
        threePoint: {type: Number, required: true},
        fieldGoal: {type: Number, required: true},
        freeThrow: {type: Number, required: true},
        assists: {type: Number, required: true},
        blocks: {type: Number, required: true},
        steals: {type: Number, required: true},
        rebounds: {type: Number, required: true}
    }
)
module.exports = Players