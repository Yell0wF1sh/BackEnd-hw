const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a car.
 */
let ShipSchema = new Schema({
  make: { type: String },
  model: { type: String },
  model_year: { type: Number },
  range: {
    value: { type: Number },
    unit: { type: String, default: "miles per gallon" },
  },
  odometer_miles: {
    value: { type: Number, default: 0 },
    unit: { type: String, default: "miles" },
  },
  engine_type: { type: String },
  display_name: { type: String },
  vin: { type: String },
});

let Car = mongoose.model("Car", ShipSchema);
module.exports = Car;