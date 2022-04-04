const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/api', (req, res) => res.send('This is root!'))

router.get('/allTeams', controllers.getAllTeams)
router.get('/allPlayers', controllers.getAllPlayers)
router.get('/allTeams/:id', controllers.getTeamsById)
router.get('/allPlayers/:id', controllers.getPlayerById)
router.post('/addTeams', controllers.createTeams)
router.put('/updateTeams/:id', controllers.updateTeams)
router.delete('/Teams/:id', controllers.deleteTeams)



module.exports = router