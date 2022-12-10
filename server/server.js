const express = require("express");
require("dotenv/config");
require("./db");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send("Movies App Home");
})

const indexRoutes = require('./routes/index.routes');
app.use("/", indexRoutes)

const userRoutes = require('./routes/user.routes');
app.use("/user", userRoutes)

app.listen(PORT, () => console.log("Server is listening to port " + PORT));
module.exports = app;