const connection = require('../models/db');

// Actualizar un vehículo (asumo que se debe actualizar el estacionamiento ocupado)
module.exports.editVehicle = (req, res) => {
  const { estacionamiento, patente, entrada } = req.body;

  if (!estacionamiento) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios: estacionamiento, patente, entrada.' });
  }

  const consulta = 'UPDATE parking SET patente = ?, entrada = ? WHERE id = ?';

  try {
    connection.query(consulta, [patente, entrada, estacionamiento], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Error en el servidor al actualizar vehículo.' });
      }

      res.status(201).json({ message: 'Vehículo actualizado exitosamente' });
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Obtener estacionamientos libres
module.exports.getFreeParkingSpots = (req, res) => {
  const consulta = 'SELECT id FROM parking WHERE patente IS NULL AND entrada IS NULL';

  try {
    connection.query(consulta, (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Error en el servidor al obtener estacionamientos libres.' });
      }

      res.status(200).json(results);
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
