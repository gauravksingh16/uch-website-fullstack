const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn:'7d'});
}

const User = mongoose.model('User', userSchema);


const validate = async (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
  });
  return schema.validate(data)
}

module.exports = {User, validate};
