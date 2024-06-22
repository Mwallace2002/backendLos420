const connection = require('../models/db');

module.exports.ping = (req, res) => {
    const consult = "SELECT * FROM visitas_frecuentes";

    try {
        connection.query(consult, (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ error: 'Database query error' });
                return;
            }

            if (results.length) {
                res.json(results); 
            } else {
                res.status(404).json({ message: 'No visit found for the given patente' });
            }
        });
    } catch (e) {
        console.error('Server error:', e);
        res.status(500).json({ error: 'Server error' });
    }
};
