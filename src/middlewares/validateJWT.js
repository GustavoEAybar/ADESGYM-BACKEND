import jwt from "jsonwebtoken";
import { status } from "../constants/index";

export const validateJWT = (req, res, next) => {
    console.log("desde validateJWT");
    const token = req.header("x-access-token");
    if (!token) {
        res
        .status(status.UNAUTHORIZED)
        .json({ message: `Need to send a token inthe request ${token}` });
    }
    try {
        jwt.verify(token, process.env.SECRET_JWT);
    }catch{
        res
        .status(status.UNAUTHORIZED)
        .json({ message: `Invalid token, please authentification failed` });
    }
    next();
};