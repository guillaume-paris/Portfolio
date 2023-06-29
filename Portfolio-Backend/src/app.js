require('dotenv').config();
require('./config/database.js');

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./config/swagger');
const authRoutes = require('./api/routes/authRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
