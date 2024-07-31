const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// get /api/user
router.get('/userlist', userController.getUser);

router.get('/download-users', userController.downloadUsers);

module.exports = router;