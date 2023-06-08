const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likes: {
      type: Number,
      default: 0
  },
  dislikes: {
      type: Number,
      default: 0
  }
})

module.exports = mongoose.model("Issue", issueSchema)