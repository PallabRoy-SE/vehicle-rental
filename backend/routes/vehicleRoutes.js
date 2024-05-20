const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehiclesController");

// Get all vehicles by type ID
router.get("/:typeId", vehiclesController.getVehiclesByTypeId);

module.exports = router;
