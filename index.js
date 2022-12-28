const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.info("Server has started on", PORT));

let newShip = require("./routes/newShip");
let getShip = require("./routes/getShip");
let updateShip = require("./routes/updateShip");
// let newCar = require("./routes/newCar");

// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/", newShip);
app.use("/", getShip);
app.use("/", updateShip);
// app.use("/", newCar);
