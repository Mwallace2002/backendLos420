const express = require('express');
const router = express.Router();

const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
const { deliveryController } = require('../controllers/deliveryController');
const { verificarVisitaFrecuente } = require('../controllers/verifyController');
const visitsController = require('../controllers/visitsController');
const entryController = require('../controllers/entryController'); 

router.post('/login', login);
router.get('/department/:department', deliveryController);
router.post('/verificar-visita-frecuente', verificarVisitaFrecuente);
router.post('/visitas-frecuentes', visitsController.agregarVisitaFrecuente);
router.post('/visitas-no-frecuentes', visitsController.agregarVisitaNoFrecuente);
router.get('/ingreso', entryController.getAllEntries);
router.post('/ingreso', entryController.createEntry);
router.put('/ingreso/:id', entryController.updateEntry);
router.delete('/ingreso/:id', entryController.deleteEntry);

module.exports = router;
