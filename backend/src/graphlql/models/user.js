const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  Job: String,
  Departmet: String,
  salary: Number,
  hireDtae: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
})


module.exports = userSchema;