const express = require("express");
const router = express.Router();
const { create, list, read, remove } = require("../controllers/tag");

//validators
const { runValidation } = require("../validators");
const { requireSignin, authMiddleware } = require("../controllers/auth");
const { tagCreateValidator } = require("../validators/tag");

//create cat
router.post(
  "/tag",
  tagCreateValidator,
  runValidation,
  requireSignin,
  authMiddleware,
  create
);

//get all cats
router.get("/tags", list);

//get single cat
router.get("/tag/:slug", read);

//delete
router.delete("/tag/:slug", requireSignin, authMiddleware, remove);

module.exports = router;
