const express = require('express');
const router = express.Router();

const productController = require('../controllers/product-controller');

router.get('/', productController.getAll);
router.get('/search', productController.getByName);

module.exports = router;