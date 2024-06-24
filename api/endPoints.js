const express = require('express');
const router = express.Router();

const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
const { deliveryController } = require('../controllers/deliveryController');
const { verificarVisitaFrecuente } = require('../controllers/verifyController');
const visitsController = require('../controllers/visitsController');
const entryController = require('../controllers/entryController'); 
const vehicleController = require('../controllers/vehicleController');
const parametrosController = require('../controllers/parametrosController'); // Ajusta la ruta según tu estructura

router.post('/login', login);
router.get('/department/:department', deliveryController);
router.post('/verificar-visita-frecuente', verificarVisitaFrecuente);
router.post('/visitas-frecuentes', visitsController.agregarVisitaFrecuente);
router.post('/visitas-no-frecuentes', visitsController.agregarVisitaNoFrecuente);
router.get('/ingreso', entryController.getAllEntries);
router.post('/ingreso', entryController.createEntry);
router.put('/ingreso/:id', entryController.updateEntry);
router.delete('/ingreso/:id', entryController.deleteEntry);
router.post('/vehicles', vehicleController.editVehicle);
router.get('/vehicles/free-spots', vehicleController.getFreeParkingSpots);
router.get('/parametros', parametrosController.getParametros);
router.put('/parametros', parametrosController.updateParametros);

module.exports = router;
