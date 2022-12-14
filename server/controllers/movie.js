const Movie = require("../models/Movie.model");
const mongoose = require('mongoose');

const getMovies = (req, res) => {
    Movie.find()
    .then(movies => {
        const movieList = movies.map(movie => movie.title)
        res.status(201).json({movieList})
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error:" + err}))
}

const getMovie = (req, res) => {
    const { id } = req.params
    Movie.findById(id)
    .then(movie => res.status(201).json({movie}))
    .catch(err => res.status(500).json({ message: "Internal Server Error: " + err}))
}

const addMovie = (req, res) =>{
    const { title, img_address, description, genre } = req.body;
    Movie.create({ title, img_address, description, genre })
    .then(movie => res.status(201).json({movie}))
    .catch(err => res.status(500).json({message: "Internal Server Error: " + err})) 
}

const delMovie = (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }

    Movie.findByIdAndRemove(id)
    .then(() => res.json({message: `Product with ${id} removed successfully`}))
    .catch(err => res.json(err));
}
module.exports = {
    getMovies,
    getMovie,
    addMovie,
    delMovie
}