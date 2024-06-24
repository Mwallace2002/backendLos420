const connection = require('../models/db'); // Asegúrate de que este archivo maneje la conexión a MySQL

// Obtener todos los ingresos
module.exports.getAllEntries = (req, res) => {
  const consulta = 'SELECT * FROM ingreso';

  try {
    connection.query(consulta, (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      res.json(result);
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Crear un nuevo ingreso
module.exports.createEntry = (req, res) => {
    const { tipo, nombre, referencia, dept, horario } = req.body;
  
    const consulta = 'INSERT INTO ingreso (tipo, nombre, referencia, dept, horario) VALUES (?, ?, ?, ?, ?)'; // Aquí estaba el error, un parámetro adicional en VALUES
  
    try {
      connection.query(consulta, [tipo, nombre, referencia, dept, horario], (err, result) => {
        if (err) {
          console.error('Database query error:', err);
          res.status(500).json({ error: 'Error en el servidor' });
          return;
        }
  
        res.status(201).json({ message: 'Ingreso creado exitosamente', id: result.insertId });
      });
    } catch (e) {
      console.error('Server error:', e);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };
  

// Actualizar un ingreso existente
module.exports.updateEntry = (req, res) => {
  const { id } = req.params; // Suponiendo que pasas el ID a través de los parámetros de la ruta
  const { tipo, nombre, referencia, dept, horario } = req.body;

  const consulta = 'UPDATE ingreso SET tipo = ?, nombre = ?, referencia = ?, dept = ?, horario = ? WHERE id = ?';

  try {
    connection.query(consulta, [tipo, nombre, referencia, dept, horario, id], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      if (result.affectedRows > 0) {
        res.json({ message: 'Ingreso actualizado exitosamente' });
      } else {
        res.status(404).json({ error: 'Ingreso no encontrado' });
      }
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Eliminar un ingreso existente
module.exports.deleteEntry = (req, res) => {
  const { id } = req.params; // Suponiendo que pasas el ID a través de los parámetros de la ruta

  const consulta = 'DELETE FROM ingreso WHERE id = ?';

  try {
    connection.query(consulta, [id], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      if (result.affectedRows > 0) {
        res.json({ message: 'Ingreso eliminado exitosamente' });
      } else {
        res.status(404).json({ error: 'Ingreso no encontrado' });
      }
    });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
