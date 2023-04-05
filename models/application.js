const mongoose = require('mongoose')
const { Schema } = mongoose

const applicationSchema = new Schema({
  position: { type: String, required: true },
  description: String,
  company: { type: String, required: true },
  country: String,
  reqExperience: Number,
  reqSkills: [String],
  processPhase: String,
  visa: { type: Boolean, default: false },
  relocation: { type: Boolean, default: false },
  salary: Number,
  dateApplied: { type: Date, default: Date() },
  datePosted: Date,
  link: String,
  labels: [String],
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true }
})

module.exports = mongoose.model('application', applicationSchema)
