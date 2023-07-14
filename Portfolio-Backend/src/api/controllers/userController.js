const UserModel = require('../../models/User');
const authService = require('../../services/authService');

const getUser = [authService.verifyToken, async (req, res) => {
  const user = await UserModel.findById(req.userId, { password: 0 }); // to exclude password
  if (!user) {
    return res.status(404).send({ message: 'User not found.' });
  }
  res.status(200).json(user);
}];
  
  
const editUser = [authService.verifyToken, async (req, res) => {
  const userId = req.userId;
  const updatedData = req.body;

  delete updatedData.email;
  delete updatedData.password;

  const user = await UserModel.findByIdAndUpdate(userId, updatedData, { new: true });

  if (!user) {
    return res.status(404).send({ message: 'User not found.' });
  }

  res.status(200).json(user);
}];


const deleteUser = [authService.verifyToken, async (req, res) => {
  const userId = req.userId;

  const user = await UserModel.findByIdAndDelete(userId);

  if (!user) {
    return res.status(404).send({ message: 'User not found.' });
  }

  res.status(200).send({ message: 'User deleted successfully.' });
}];
  
module.exports = {
  getUser,
  editUser,
  deleteUser
};
