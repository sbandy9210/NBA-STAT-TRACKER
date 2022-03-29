const express = require('express')
const { Players } = require('./models')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api', routes)

// app.get('/', (req, res) => {
//   res.send('This is root!')
// })

// app.get('/players', async (req, res) => {
//     const players = await Players.find()
//     res.json(players)
//   })

// app.get('/players/:id', async (req, res) => {
//     try {
//       const { id } = req.params
//       const player = await Player.findById(id)
//       if (!player) throw Error('Player not found')
//       res.json(player)
//     } catch (e) {
//       console.log(e)
//       res.send('Player not found!')
//     }
//   })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})