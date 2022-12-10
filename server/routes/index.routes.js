const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("Movies App Home");
});

module.exports = router;