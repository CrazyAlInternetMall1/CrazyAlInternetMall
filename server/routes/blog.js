const express = require("express");
const router = express.Router();
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated,
  listSearch,
} = require("../controllers/blog");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");

//CHANGE FROM AUTH TO ADMIN TO PROTECT ROUTE

router.post("/blog", requireSignin, authMiddleware, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requireSignin, authMiddleware, remove);
router.put("/blog/:slug", requireSignin, authMiddleware, update);
router.get("/blog/photo/:slug", photo);
router.get("/blogs/search", listSearch);

///////////////////////////////////////////////////////////////////////////
//             Implement once finished                                   //
///////////////////////////////////////////////////////////////////////////

// router.post("/blogs/related", listRelated);

///////////////////////////////////////////////////////////////////////////
//             Implement once finished                                   //
///////////////////////////////////////////////////////////////////////////

module.exports = router;
