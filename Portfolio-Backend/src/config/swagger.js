const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio Backend API',
      version: '1.0.0',
      description: 'A simple Express Portfolio Backend API',
    },
    servers: [
      {
        url: 'https://localhost:4242',
      },
    ],
  },
  apis: ['./src/api/routes/*.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;
