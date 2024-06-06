const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/User');
const authController = require('../controllers/authControllers');
const { authenticateUser } = require('../middlewares/authMiddlewares');

// POST /api/register
router.post('/register', authController.registerUser);

// POST /api/login
router.post('/login', authController.loginUser);

// get /api/user
router.get('/user', authenticateUser, authController.getUser);

// // Protected route for admins only
// router.get('/admin', authenticateUser, authorizeAdmin, (req, res) => {
//   res.json({ message: 'Admin access granted' });
// });

module.exports = router;
