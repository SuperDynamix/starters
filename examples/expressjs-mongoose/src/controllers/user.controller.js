const UserModel = require('../models/user.model');

const addUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json({
      ok: true,
      code: 201,
      message: 'succeeded',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      error: err.message,
      message: 'failed'
    });
  };
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      ok: true,
      code: 200,
      message: 'succeeded',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      error: err.message,
      message: 'failed'
    });
  };
};

module.exports = { addUser, getUsers };