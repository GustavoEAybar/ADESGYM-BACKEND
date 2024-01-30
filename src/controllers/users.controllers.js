import User from "../models/User";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";
import { status } from "../constants";

const showUsers = async (req, res) => {
  console.log("desde showUsers");
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
};

const updateUser = async (req, res) => {
  console.log("desde updateUser");
};

const deleteUser = async (req, res) => {
  console.log("desde deleteUser");
};

export { showUsers, login, register, getOne, updateUser, deleteUser };
