const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')

router.get('/user/:userid', applicationController.getApplications)
router.get('/:id', applicationController.getApplication)
router.post('/', applicationController.create)
router.patch('/', applicationController.update)
router.delete('/:id', applicationController.delete)

module.exports = router
