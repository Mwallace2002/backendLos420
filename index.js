const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/endPoints.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS para permitir solicitudes desde http://localhost:4173
app.use(cors({
  origin: 'http://localhost:4173', // Permitir solicitudes desde este origen durante el desarrollo
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
}));

// Ruta de inicio básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <body>
                <h1>Proyecto de vercel</h1>
            </body> 
        </html>
    `;
    res.send(htmlResponse);
});

// Rutas principales de la API
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
