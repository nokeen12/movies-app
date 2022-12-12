const router = require("express").Router();
const movie = require('../controllers/movie.js');

router.get("/", movie.getMovies);
router.get("/:id", movie.getMovie);

router.post("/add", movie.addMovie);

module.exports = router;