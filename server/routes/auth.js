const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth");
const { signin } = require("../controllers/auth");
const { signout } = require("../controllers/auth");
const { preSignup } = require("../controllers/auth");
const {
  requireSignin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

//validators
const { runValidation } = require("../validators");
const { userSignupValidator } = require("../validators/auth");
const {
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");

router.post("/pre-signup", userSignupValidator, runValidation, preSignup);
router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

module.exports = router;
