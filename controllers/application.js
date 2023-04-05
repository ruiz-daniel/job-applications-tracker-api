const applicationService = require('../services/application')

exports.getApplications = async (req, res, next) => {
  const response = await applicationService.handler
    .get(req.params.userid)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.getApplication = async (req, res, next) => {
  const response = await applicationService.handler
    .getById(req.params.id)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.create = async (req, res, next) => {
  const response = await applicationService.handler
    .create(req.body)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.update = async (req, res, next) => {
  const response = await applicationService.handler
    .update(req.body)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.delete = async (req, res, next) => {
  const response = await applicationService.handler
    .delete(req.params.id)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}
