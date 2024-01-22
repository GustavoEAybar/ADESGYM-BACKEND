import { Router } from "express";
import {
    showUsers,
    login,
    register,
    getOne,
    updateUser,
    deleteUser
} from "../controllers/users.controllers";
import {
    loginValidate,
    registerValidate,
    userValidate
} from "../middlewares/userValidations";
import validateJWT from "../middlewares/validateJWT";


const users = Router();

users
.route("/")
.get(showUsers);
users
.route("/login")
// .post([loginValidate], login)
users
.route("/register")
// .post([registerValidate], register)
users
.route("/:id")
.get(getOne)
// .put([validateJWT, userValidate], updateUser)
// .delete([validateJWT], deleteUser);

export default users;