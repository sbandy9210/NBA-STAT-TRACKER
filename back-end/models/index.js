const { model } = require('mongoose')
const EastSchema = require('./east')
const WestSchema = require('./west')
const PlayersSchema = require('./players')

const East = model('east', EastSchema)
const West = model('west', WestSchema)
const Players = model('players', PlayersSchema)

module.exports = {
    East,
    West,
    Players
}