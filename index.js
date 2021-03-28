require("dotenv").config();
const { PORT_ENV } = process.env;
const express = require('express')
const app = express()
// const session = require("express-session");
require("./config/database");

const routes = require('./routes');

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// app.use(session({
//     secret: "session",
//     resave: false,
//     saveUninitialized: true,
// }))
app.use(routes)

app.listen(PORT_ENV, console.log(`app running on port ${PORT_ENV}`))