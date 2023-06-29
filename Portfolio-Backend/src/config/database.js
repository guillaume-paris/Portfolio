const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log('Database connection established!');
  })
  .catch((err) => {
    console.error('There was an error connecting to the database:', err);
  });

module.exports = mongoose;
