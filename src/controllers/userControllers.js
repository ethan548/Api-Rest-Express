import User from '../models/user.js';

export const getUsers = async (req, res) => {
  res.json("get users");
  const users = await User.find();
  console.log(users);
}