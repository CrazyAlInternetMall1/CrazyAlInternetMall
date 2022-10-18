const express = require("express");
const router = express.Router();
const { create, list, read, remove } = require("../controllers/category");

//validators
const { runValidation } = require("../validators");
const { requireSignin, authMiddleware } = require("../controllers/auth");
const { categoryCreateValidator } = require("../validators/category");

//create cat
router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  authMiddleware,
  create
);

//get all cats
router.get("/categories", list);

//get single cat
router.get("/category/:slug", read);

//delete
router.delete("/category/:slug", requireSignin, authMiddleware, remove);

module.exports = router;
