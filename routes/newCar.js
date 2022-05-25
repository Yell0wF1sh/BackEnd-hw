const express = require("express");
const router = express.Router();
let Car = require("../models/Car");

router.post("/newCar/", function (req, res) {
  res.send("Successful connection!");
});