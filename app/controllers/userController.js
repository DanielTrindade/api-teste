const User = require("../models/user");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.findAllUsers();
    res.status(200).json(users);
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createUser: async (req, res) => {
    const newUser = new User(req.body);
    try {
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "usuário não pode ser criado" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
