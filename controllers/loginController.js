// controllers/loginController.js
const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { username, password } = req.body;

    const consult = 'SELECT username, rol FROM login WHERE username = ? AND password = ?'; // Ajusta la consulta SQL para seleccionar el rol también

    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ error: 'Database query error' });
                return;
            }

            if (result.length > 0) {
                const { username, rol } = result[0]; // Obtenemos el username y el rol del primer resultado
                const token = jwt.sign({ username, rol }, "Stack", {
                    expiresIn: '1m'
                });
                res.json({ token, rol }); // Devolvemos el token y el rol en la respuesta
            } else {
                res.status(401).json({ message: 'Wrong user' });
            }
        });
    } catch (e) {
        console.error('Server error:', e);
        res.status(500).json({ error: 'Server error' });
    }
};