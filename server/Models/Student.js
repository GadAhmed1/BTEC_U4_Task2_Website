const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
      },
      name: {
        type: String,
        required: true,
        unique: false 
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      address: {
        type: String,
        required: true
      },
      gpa: {
        type: Number,
        required: true
      }
  });

const User = mongoose.model('students', userSchema);
module.exports = User;
  