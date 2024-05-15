const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/User');
const authController = require('../controllers/authControllers');
const { authenticateUser, authorizeAdmin } = require('../middlewares/authMiddlewares');

// POST /api/register
router.post('/register', authController.registerUser);

// POST /api/login
router.post('/login', authController.loginUser);

// Protected route for admins only
router.get('/admin', authenticateUser, authorizeAdmin, (req, res) => {
  res.json({ message: 'Admin access granted' });
});

module.exports = router;
