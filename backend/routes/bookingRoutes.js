const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");

// Create a new booking
router.post("/", bookingsController.createBooking);

module.exports = router;
