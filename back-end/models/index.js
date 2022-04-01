const { model } = require('mongoose')
const PlayersSchema = require('./players')
const TeamsSchema = require('./teams')


const Players = model('players', PlayersSchema)
const Teams = model('teams', TeamsSchema)


module.exports = {
    Players,
    Teams
}