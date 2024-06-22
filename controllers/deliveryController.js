const connection = require('../models/db');

module.exports.deliveryController = (req, res) => {
    const consult = 'SELECT numero FROM contactos WHERE departamento = ?';

    try {
        const { department } = req.params;
        
        console.log(`Department: ${department}`);

        connection.query(consult, [department], (err, results) => {
            if (err) {
                console.error(err.message);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            
            if (results.length === 0) {
                res.status(404).json({ message: 'No contact found for the specified department' });
                return;
            }

            const numero = results[0].numero;
            res.json({ numero });
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'An error occurred' });
    }
};
