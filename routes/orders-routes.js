const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order-controller');
const orderLineController = require('../controllers/orderline-controller');

router.get('/', orderController.getAll);
router.get('/details/:idOrder', orderLineController.seeDetails);
router.post('/', orderController.createOrder);

module.exports = router;