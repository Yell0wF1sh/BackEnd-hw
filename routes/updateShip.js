const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

router.patch("/updateShip", async function (req, res) {
  if (req.body.name == undefined) {
    console.error("No name for ship");
    res.status(400);
  }
  else {
    try {
      await Ship.findOneAndUpdate({ name: req.body.name }, { speed: req.body.speed }, function (e, docs) {
        if (e) {
          console.error("Error finding ship", e);
          res.status(500).send(e);
        }
        else if (!docs) {
          console.error("There's no such ship in the database", e);
          res.status(404).send(e);
        } else {
          res.send(docs);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
});

module.exports = router;