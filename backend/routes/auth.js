const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middlware/fetchuser");

const JWT_SECRET = "aryanprajapati@0148";

//Route 1: For create new user post:/api/auth/createuser
routes.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valis email").isEmail(),
    body("password", "Enter minimum 5 charcter").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // const user = User(req.body);
    // user.save();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email alredy exits...!" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.send({ authToken });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("some error occur...!");
    }
    //   .then(user => res.json(user))
    //   .catch(err => {console.log(err); res.json({error: 'Please Enter a unique value for email', message: err.message});});
  }
);

//Route 2: For create new user post:/api/auth/login

routes.post(
  "/login",
  [
    body("email", "Enter valis email").isEmail(),
    body("password", "password can't be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please enter valid user and password" });
      }
      const passCompare = bcrypt.compare(password, user.password);
      if (!passCompare) {
        return res
          .status(400)
          .json({ error: "Please enter valid user and password..!" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.send({ authToken });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("some error occur...!");
    }
  }
);

//Route 3: For create new user post:/api/auth/getuser
routes.post("/getuser",fetchuser, async (req, res) => {
  try {
    const userId=req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("some error occur...!");
  }
});

module.exports = routes;
