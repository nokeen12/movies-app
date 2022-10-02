const router = require("express").Router();
const user = require('../controllers/user.js');

router.get("/users", user.getUsers);
router.get("/:id", user.getUser);

module.exports = router;
