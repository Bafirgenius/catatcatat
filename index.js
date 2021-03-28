const express = require('express')
const port = 5000
const app = express()
const session = require("express-session");
require("./config/database");

const routes = require('./routes');

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "session",
    resave: false,
    saveUninitialized: true,
}))
app.use(routes)

app.listen(port, console.log(`app running on port ${port}`))