import jwt from "jsonwebtoken";

export const generateJWT = (uid, userName) => {
    return new Promise((resolve, reject) => {
        const payload = {uid, userName};
        jwt.sign(
            payload,
            process.env.SECRET_JWT,
            { expiresIn: "1hs"},
            (err, token) => {
                if(err){
                    reject(err);
                }
                resolve(token);
            }
        );
    }); 
};