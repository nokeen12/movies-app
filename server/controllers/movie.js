const Movie = require("../models/Movie.model");

const getMovies = (req, res) => {
    Movie.find()
    .then(movies => {
        const movieList = movies.map(movie => movie.title)
        res.status(201).json({movieList})
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }))
}

const getMovie = (req, res) => {
    const { id } = req.params
    Movie.findById(id)
    .then(movie => res.status(201).json({movie}))
    .catch(err => res.status(500).json({ message: "Internal Server Error" }))
}

module.exports = {
    getMovies,
    getMovie
}