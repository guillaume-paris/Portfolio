const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
  const payload = { 
    id: user._id, 
    email: user.email,
    name: user.name 
  };
  
  const options = { expiresIn: '14d' };
  
  return jwt.sign(payload, secretKey, options);
};

module.exports = {
  generateToken
};
