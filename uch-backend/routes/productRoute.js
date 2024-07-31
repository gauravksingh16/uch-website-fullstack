const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/productControllers');

router.post('/products', addProduct);

module.exports = router;