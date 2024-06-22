const connection = require('../models/db');

module.exports.agregarVisitaFrecuente = (req, res) => {
  const { nombre, rut, patente, fechaNacimiento} = req.body;

  const query = 'INSERT INTO visitas_frecuentes (nombre, rut, patente, fecha_nacimiento) VALUES (?, ?, ?, ?)';

  connection.query(query, [nombre, rut, patente, fechaNacimiento], (error, results) => {
    if (error) {
      console.error('Error al agregar visita frecuente:', error);
      return res.status(500).json({ message: 'Error al agregar visita frecuente' });
    }
    res.status(201).json({ message: 'Visita frecuente agregada con éxito', data: results });
  });
};

module.exports.agregarVisitaNoFrecuente = (req, res) => {
  const { nombre, rut, patente, fechaNacimiento} = req.body;

  const query = 'INSERT INTO visitas_no_frecuentes (nombre, rut, patente, fecha_nacimiento) VALUES (?, ?, ?, ?)';

  connection.query(query, [nombre, rut, patente, fechaNacimiento], (error, results) => {
    if (error) {
      console.error('Error al agregar visita no frecuente:', error);
      return res.status(500).json({ message: 'Error al agregar visita no frecuente' });
    }
    res.status(201).json({ message: 'Visita no frecuente agregada con éxito', data: results });
  });
};
