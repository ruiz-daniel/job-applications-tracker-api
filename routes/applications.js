const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
var authenticate = require('../authenticateMiddleware')

router.get('/user/:userid', authenticate.authenticateToken, applicationController.getApplications)
router.get('/:id', authenticate.authenticateToken, applicationController.getApplication)
router.post('/', authenticate.authenticateToken, applicationController.create)
router.patch('/', authenticate.authenticateToken, applicationController.update)
router.delete('/:id', authenticate.authenticateToken, applicationController.delete)

module.exports = router
