const connection = require('../models/db');

module.exports.verificarVisitaFrecuente = (req, res) => {
  const { rut } = req.body;

  const consulta = 'SELECT * FROM visitas_frecuentes WHERE rut = ?';

  try {
    connection.query(consulta, [rut], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      if (result.length > 0) {
        res.json({ esFrecuente: true });
      } else {
        res.json({ esFrecuente: false });
      }
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
