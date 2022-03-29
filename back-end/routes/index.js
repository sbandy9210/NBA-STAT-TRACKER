const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/allTeams', controllers.getAllTeams)
router.get('/allPlayers', controllers.getAllPlayers)
router.get('/allPlayers/:id', controllers.getPlayerById)
router.post('/east/create', controllers.createEast)
router.post('/west/create', controllers.createWest)
router.post('/players/create', controllers.createPlayer)



module.exports = router