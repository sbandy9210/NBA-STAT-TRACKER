const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Teams = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        wins: {type: Number, required: true},
        losses: {type: Number, required: true},
        winningPercentage: {type: Number, required: true},
        rank: {type: Number, required: true} 
    }
)
module.exports = Teams