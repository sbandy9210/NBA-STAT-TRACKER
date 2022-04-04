const { Players, Teams } = require('../models/')



const getAllTeams = async (req,res) => {
    try {
        const teams = await Teams.find()
        return res.status(200).json({ teams })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllPlayers = async (req,res) => {
    try {
        const players = await Players.find()
        return res.status(200).json({ players })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPlayerById = async (req, res) => {
        try {
          const { id } = req.params
          const player = await Players.findById(id)
          if (!player) throw Error('Player not found')
          res.json(player)
        } catch (e) {
          console.log(e)
          res.send('Player not found!')
        }
}

const getTeamsById = async (req, res) => {
        try {
          const { id } = req.params
          const teams = await Teams.findById(id)
          if (!teams) throw Error('Team not found')
          res.json(teams)
        } catch (e) {
          console.log(e)
          res.send('Team not found!')
        }
      }   
      
const createTeams = async (req, res) => {
    try{
        const teams = await new Teams(req.body)
        teams.save()
        return res.status(201).json({
            teams 
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const createPlayer = async (req,res) => {
    try {
        const players = await new Players(req.body)
        await players.save()
        return res.status(201).json({
            team
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}


const updateTeams = async (req, res) => {
    try {
        const { id } = req.params
        await Teams.findByIdAndUpdate(id, req.body, { new:true }, (err, Teams) => {
            return res.status(200).json(Teams)
        })
    }catch (error) {}
}

const deleteTeams = async (req, res) => {
    try {
        const  id = req.params.id
        console.log(req.params)
        const deleted = await Teams.findByIdAndDelete(id)
        res.status(200).send('Data Deleted')
        // if (deleted) {
        //     return 
        // }
        // throw new Error('Data not found!')
    } catch (error) {
        return res.status(500).send('delete controller')
    }

}


module.exports = {
     getAllPlayers,
     getAllTeams,
     getPlayerById,
     getTeamsById,
     createPlayer,
     createTeams,
     updateTeams,
     deleteTeams,

}