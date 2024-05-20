const express = require("express");
const router = express.Router();
const vehicleTypesController = require("../controllers/vehicleTypesController");

// Get all vehicle types
router.get("/", vehicleTypesController.getAllVehicleTypes);

module.exports = router;
