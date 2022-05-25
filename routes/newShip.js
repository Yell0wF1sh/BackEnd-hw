const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a POST request at the URL /newShip/, to do this code.
 */
router.post("/newShip", function (req, res) {
  // look up documents in MongoDB by name.
  Ship.findOne({ name: req.body.name }, function (error, doc) {
    // if there was an error
    if (error) {
      console.error("Error finding ship", error);
      res.status(500).send(error);
    }
    // if no document was found
    // else if (doc.length == 0) {
    else {
      console.log(doc);
      // create a new instance of the Ship model, using the request body as the data.
      new Ship(req.body).save((err, doc) => {
        /**
         * this error/document fat-arrow function is required.
         * on an error, handle it. else send the newly created document back to the client.
         */
        if (err) {
          console.error("Error saving new ship", err);
          res.status(500).send(err);
        }
        else {
          res.send(doc);
        }
      });
    }
    // a document was found, return it instead.
    // else {
    //   res.send(doc);
    // }
  });
});

router.get("/test", function (req, res) {
  res.send("Test Successful");
});

/**
 * tell Express.js that when it receives a GET request at the URL /getShip/, to do this code.
 */
router.get("/getShip/", function (res, req) {
  // look up documents in MongoDB by name (provided by the field name in the request).
  Ship.findOne({ name: req.body.name }, function (e, doc) {
    // if there's an error while finding the ship
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

router.get("/getShip/secondaryBattery", function (res, req) {
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

router.patch("/updateShip", function (res, req) {
  if (req.body.name == null) {
    res.status(400);
  }
  else {
    Ship.findOneAndUpdate({ name: req.body.name }, function (e, docs) {
      if (e) {
        console.error("Error finding ship", e);
        res.status(500).send(e);
      }
      else if (!docs) {
        console.error("There's no such ship in the database", e);
        res.status(404).send(e);
      }
      else {
        res.send(docs);
      }
    });
  }
});
module.exports = router;