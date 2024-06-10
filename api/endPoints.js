const express = require('express');
const router = express.Router();

const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
const { deliveryController } = require('../controllers/deliveryController'); // Agregar el controlador de entrega

router.get('/ping', ping);
router.post('/login', login);
router.get('/department/:department', deliveryController); 

module.exports = router;
