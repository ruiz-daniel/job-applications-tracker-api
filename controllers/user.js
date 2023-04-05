const userService = require('../services/user')

exports.getUsers = async (req, res, next) => {
  const response = await userService.handler.get()
  res.send(response)
}

exports.getUser = async (req, res, next) => {
  const response = await userService.handler
    .getById(req.params.id)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.register = async (req, res, next) => {
  const response = await userService.handler
    .register(req.body)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.login = async (req, res, next) => {
  const response = await userService.handler
    .login(req.body.username, req.body.password)
    .catch((error) => {
      res.status(400)
      return error.message
    })
  res.send(response)
}

exports.update = async (req, res, next) => {
  if (req.body._id === req.user._id || req.user.admin) {
    if (!req.user.admin && req.body.admin) {
      res.status(403)
      res.send("Can't make a user an admin without permission")
    }
    const response = await userService.handler
      .update(req.body)
      .catch((error) => {
        res.status(400)
        return error.message
      })
    res.send(response)
  } else {
    res.status(401)
    res.send("Can't change someone else's user")
  }
}

exports.delete = async (req, res, next) => {
  if (req.body._id === req.user.id || req.body.user.admin) {
    const response = await userService.handler
      .delete(req.params.id)
      .catch((error) => {
        res.status(400)
        return error.message
      })
    res.send(response)
  } else {
    res.status(401)
    res.send("Can't delete someone else's user")
  }
}
