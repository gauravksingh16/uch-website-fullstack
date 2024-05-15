const {User, validate} = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

// Controller method for user registration
exports.registerUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email:req.body.email });
    if (existingUser) {
      return res.status(409).send({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await new User({...req.body, password: hashedPassword}).save();
    res.status(201).send({message: 'User registered successfully'});
  } catch(error){
    res.status(500).send({ message: 'Internal server error' });
  }
};

const loginValidate = async (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data)
}

// Controller method for user login
exports.loginUser = async (req, res) => {
  try {
    const { error } = loginValidate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = user.generateAuthToken(); 
    res.status(200).send({ data: token, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
