const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
  const payload = { 
    id: user._id, 
    email: user.email,
    name: user.name 
  };
  
  const expiresIn = '14d';
  
  const token = jwt.sign(payload, secretKey, { expiresIn });
  
  const expiresInMs = parseInt(expiresIn, 10) * 24 * 60 * 60 * 1000;

  return {
    token,
    expiresInMs
  };
};

module.exports = {
  generateToken
};
