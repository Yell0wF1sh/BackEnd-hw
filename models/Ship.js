const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a ship.
 */
let ShipSchema = new Schema({
  /**
   * Name of this Ship
   */
  name: {
    String
  },
  /**
   * Ship's top speed in kts.
   */
  speed: {
    value: { Number },
    unit: { String, default: "kts" }
  },
  /**
   * When this Ship was designed.
   */
  designed: {
    Date
  },
  /**
   * When this Ship was launched.
   */
  launched: {
    Date
  },
  /**
   * Descriptor of ship's main battery guns.
   */
  mainBattery: {
    String
  },
  /**
   * Descriptor of the ship's secondary battery guns.
   */
  secondaryBattery: {
    String
  },
  /**
   * Ship's belt armor in mm.
   */
  armor: {
    value: { Number },
    unit: { String, default: "mm" }
  }
});

let Ship = mongoose.model("Ship", ShipSchema);
module.exports = Ship;