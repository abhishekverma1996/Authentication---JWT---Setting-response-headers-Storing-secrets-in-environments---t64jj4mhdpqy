const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  // Your code goes here
   name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
});

const User = mongoose.model('user',userSchema);

module.exports = User;
