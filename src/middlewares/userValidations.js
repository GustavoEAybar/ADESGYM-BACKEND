import { check } from "express-validator";
import validationsResults from "../helpers/validationsResults";

const loginValidate = [
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
    validationsResults(req, res, next);
  },
];

const registerValidate = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 to 50 characters"),

  check("lastName")
    .notEmpty()
    .withMessage("Lastname is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Lastname must be between 3 to 50 characters"),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 12, max: 100 })
    .withMessage("Email must be between 12 to 100 characters"),

  check("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 7, max: 20 })
    .withMessage("Phone must be between 7 to 20 characters"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have at least 8 characters"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

const userValidate = [
  check("image")
    .notEmpty()
    .withMessage("Image is required")
    .isLength({ min: 1, max: 200 })
    .withMessage("The Image must be between 1 to 200 character"),

  check("classes")
    .notEmpty()
    .withMessage("Classes is required")
    .isLength({ min: 4, max: 100 })
    .withMessage("The class must be between 4 to 100 character"),

  check("contractedPlan")
    .notEmpty()
    .withMessage("The plan contracted is required")
    .isLength({ min: 4, max: 100 })
    .withMessage("The plan contracted must be between 4 to 100 character"),

  check("roll")
    .notEmpty()
    .withMessage("Roll is required")
    .isLength({ min: 7, max: 20 })
    .withMessage("Roll must be between 7 to 20 character"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export { loginValidate, registerValidate, userValidate };
