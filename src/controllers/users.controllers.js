import User from "../models/User";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";
import { status } from "../constants";

const showUsers = async (req, res) => {
  console.log("desde showUsers");

  try {
    const userList = await User.find();
    res
    .status(status.OK)
    .json(userList);
  } catch (error) {
    res
    .status(status.NOT_FOUND)
    .json({ message: "error loading User" });
  }
};

const login = async (req, res) => {
  console.log("desde login");

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(status.NOT_FOUND)
        .json({ message: "User email or password incorrect - email" });
    }

    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
      res
        .status(status.NOT_FOUND)
        .json({ message: "User email or password incorrect - password" });
    }

    const token = await generateJWT(user._id, user.name);
    res
    .status(status.OK)
    .json({ token });
  } catch {
    res
    .status(status.BAD_REQUEST)
    .json({ message: "User login in failed" });
  }
};

const register = async (req, res) => {
  console.log("desde register");

  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });
    if (userFound) {
      return (
        res
        .status(status.BAD_REQUEST)
        .json({ message: "User already exists" })
      );
    }

    let createUser = new User(req.body);

    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);
    
    const token = await generateJWT(createUser._id, createUser.name);
    await createUser.save();

    res
    .status(status.CREATED)
    .json({token,});

  } catch (error) {
    res
    .status(status.NOT_FOUND)
    .json({ message: "User registration failed" });
  }
};

const getOne = async (req, res) => {
  console.log("desde getOne");

  const { id } = req.params;
  try {
    const oneUser = await User.findOne( id );
    res
    .status(status.OK)
    .json(oneUser);
  } catch (error) {
    res
    .status(status.NOT_FOUND)
    .json({ message: "Error when requesting service" });
  }
};

const updateUser = async (req, res) => {
  console.log("desde updateUser");

  const { id } = req.params;

  try {
    const newUser = await User.findByidAndUpdate(id, req.body);
    const newPassword = await req.body.password
    const SALT_ROUND = 10;
    newUser.passwoed = await bcrypt.hash(newPassword, SALT_ROUND);
    await newUser.save();
    
    res
    .status(status.OK)
    .json({ message: "User updated" });

  } catch (error) {
    res
    .status(status.NOT_FOUND)
    .json({ message: "Error when updating user" });
  }
};

const deleteUser = async (req, res) => {
  console.log("desde deleteUser");

  const { id } = req.params;

  try {
    await User.findOneAndDelete(id);
    res
    .status(status.OK)
    .json({ message: "removes user" });
  } catch (error) {
    res
    .status(status.NOT_FOUND)
    .json({message: "error when deleting user" });
  }
};

export { showUsers, login, register, getOne, updateUser, deleteUser };
