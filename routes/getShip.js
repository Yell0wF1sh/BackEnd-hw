const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

router.get("/getShip", function (req, res) {
  // look up documents in MongoDB by name (provided by the field name in the request).
  Ship.findOne({ name: req.body.name }, function (error, doc) {
    // if there's an error while finding the ship
    if (error) {
      console.error("Error finding ship", error);
      res.status(500).send(error);
    }
    // if the method finds no existing document with the name
    else if (!doc) {
      console.error("There's no such ship in the database", error);
      res.status(404).send(error);
    }
    // a document was found, return it.
    else {
      res.send(doc);
    }
  });
});

router.get("/getShip/secondaryBattery", function (req, res) {
  Ship.find({ secondaryBattery: req.body.secondaryBattery }, function (e, doc) {
    if (e) {
      console.error("Error finding ship", e);
      res.status(500).send(e);
    }
    // if the method finds no existing document with the name
    else if (!doc) {
      console.error("There's no such ship in the database", e);
      res.status(404).send(e);
    }
    // a document was found, return it.
    else {
      res.send(doc);
    }
  });
});

module.exports = router;