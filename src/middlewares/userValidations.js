import validationsResults from "../helpers/validationsResults";

const loginValidate = [
    console.log("desde loginValidate"),
    check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 12, max: 100 })
    .withMessage("Email must be between 12 to 100 characters"),

    check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have at least 8 characters"),

    (req, res, next) => {
        validationsResults(req,res, next);
    },

];
const registerValidate = [
    console.log("desde registerValidate"),

    // (req, res, next) => {
    //     validationsResults(req,res, next);
    // },
];

const userValidate = [
    console.log("desde userValidate"),

    // (req, res, next) => {
    //     validationsResults(req,res, next);
    // },
];

export { loginValidate, registerValidate, userValidate };