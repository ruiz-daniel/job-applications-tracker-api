const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
var authenticate = require('../authenticateMiddleware')

/* GET users listing. */
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/login', userController.login)
router.post('/', userController.register)
router.patch('/',  authenticate.authenticateToken, userController.update)
router.delete('/:id',  authenticate.authenticateToken, userController.delete)

module.exports = router
