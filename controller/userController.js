const User = require("../config/createTable");

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  const exists = await User.findOne({ where: { email } });
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email });
  res.status(201).json(user);
};
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};
exports.updateUser = async (req, res) => {
  const { name } = req.body;

  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await user.update({ name });
  res.json(user);
};
exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await user.destroy();
  res.json({ message: "User deleted successfully" });
};
