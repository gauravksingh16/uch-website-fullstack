const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request object
    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

const authorizeAdmin = async (req, res, next) => {
  const userId = req.user?.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    // Check if the user is an admin and has the predefined email
    if (user.role === 'admin' && user.email === process.env.ADMIN_EMAIL) {
      next();
    } else {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
  } catch (error) {
    console.error('Authorization error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { authenticateUser, authorizeAdmin };

module.exports = { authenticateUser, authorizeAdmin };
