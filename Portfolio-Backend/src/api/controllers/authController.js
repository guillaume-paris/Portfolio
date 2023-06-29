const UserModel = require('../../models/User');
const authService = require('../../services/authService');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }
    const user = new UserModel({ name, email, password });
    await user.save();
    const { token, expiresInMs } = authService.generateToken(user);
    res.status(201).json({ token, expiresIn: expiresInMs });
};
  

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user || !await user.isValidPassword(password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const { token, expiresInMs } = authService.generateToken(user);
  res.json({ name: user.name, token, expiresIn: expiresInMs });
};

module.exports = {
  signUp,
  signIn
};
