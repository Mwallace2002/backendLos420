const connection = require('../models/db');

module.exports.deliveryController = (req, res) => {
    const { department } = req.params;

    const consult = 'SELECT numero FROM contactos WHERE name = ?';

    try {
        connection.query(consult, [department], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error de servidor' });
                return;
            }

            if (result.length > 0) {
                const whatsappNumber = result[0].numero;
                res.json({ whatsappNumber });
            } else {
                res.status(404).json({ message: 'Departamento no encontrado' });
            }
        });
    } catch (error) {
        console.error('Error en el controlador de entrega:', error);
        res.status(500).json({ message: 'Error de servidor' });
    }
};
