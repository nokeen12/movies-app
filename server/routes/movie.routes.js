const router = require("express").Router();
const movie = require('../controllers/movie.js');

router.get("/movies", movie.getMovies);
router.get("/:id", movie.getMovie);

module.exports = router;