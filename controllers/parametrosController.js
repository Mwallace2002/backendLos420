// src/controllers/parametrosController.js
const connection = require('../models/db');

module.exports.getParametros = (req, res) => {
    const query = 'SELECT * FROM parametros LIMIT 1';

    try {
        connection.query(query, (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ error: 'Database query error' });
                return;
            }

            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ message: 'No parameters found' });
            }
        });
    } catch (e) {
        console.error('Server error:', e);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports.updateParametros = (req, res) => {
    const { TiempoEstancia, TiempoAdvertencia } = req.body;

    const query = 'UPDATE parametros SET TiempoEstancia = ?, TiempoAdvertencia = ? WHERE id = 1';

    try {
        connection.query(query, [TiempoEstancia, TiempoAdvertencia], (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ error: 'Database query error' });
                return;
            }

            if (result.affectedRows > 0) {
                res.json({ message: 'Parámetros actualizados exitosamente' });
            } else {
                res.status(404).json({ message: 'No parameters found to update' });
            }
        });
    } catch (e) {
        console.error('Server error:', e);
        res.status(500).json({ error: 'Server error' });
    }
};
