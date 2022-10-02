const User = require("../models/User.model");

const getUsers = (req, res) => {
    User.find()
    .then(users => {
        const userList = users.map(user => user.username)
        res.status(201).json({userList})
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }))
}

const getUser = (req, res) => {
    const { id } = req.params
    User.findById(id)
    .then(user => res.status(201).json({user}))
    .catch(err => res.status(500).json({ message: "Internal Server Error" }))
}

module.exports = {
    getUsers,
    getUser
}