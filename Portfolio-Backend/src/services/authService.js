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

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = {
  generateToken,
  verifyToken
};
