"use strict";
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const { connectDB } = require("./config/db");
const session = require("express-session");
const config = require("./config/config");
const courseRoutes = require("./routes/addCourse");
const loginRoute = require("./routes/login");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("./models/User");
const passport = require('passport')
const cookieSession = require('cookie-session')
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(cors())
app.use("/login", require("./routes/login"));
app.use("/dashboard", require("./routes/addCourse"));

app.use("/auth", require("./routes/auth"));

app.use("/dashboard", require("./routes/dashboard"));

app.post("/auth/googleone/",(req,res)=>{
  console.log(req.body)
  res.end('done')
  // res.send(200).json(req.body)
})
app.listen(config.port, () => {
  console.log("App is listening on url http://localhost:" + config.port);
});
