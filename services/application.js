const mongoose = require('mongoose')
const applicationModel = require('../models/application')

/**
 * @param {Object} application
 * @throws {Error}
 */
module.exports.handler = {
  async create(application) {
    const result = await applicationModel.create(application).catch((error) => {
      console.log(error)
      throw new Error(error._message)
    })
    return result
  },
  async get(userid) {
    const result = applicationModel.find({ user: userid }).catch((error) => {
      console.log(error)
      throw new Error(error._message)
    })
    return result
  },
  async getById(id) {
    const result = await applicationModel.findById(id).catch((error) => {
      throw new Error('Job Application not found')
    })
    return result
  },
  async update(application) {
    let result = await applicationModel
      .findByIdAndUpdate(application._id, application, { new: true })
      .catch((error) => {
        console.log(error)
        throw new Error(error._message)
      })
    if (!result?._id) {
      throw new Error('Job Application not found')
    }
    return result
  },
  async delete(id, tokenUser) {
    let result = await applicationModel
      .deleteOne({ _id: id, user: tokenUser._id })
      .catch((error) => {
        throw new Error('Job Application not found')
      })
    return result
  },
}
