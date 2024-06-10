const express = require('express');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/endPoints.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utiliza el middleware cors sin ninguna configuración específica
app.use(cors());

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

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
