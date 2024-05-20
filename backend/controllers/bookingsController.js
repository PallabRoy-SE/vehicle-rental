const { Booking } = require("../models");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;
  try {
    // Check for overlapping bookings
    const existingBooking = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          { startDate: { [Op.between]: [startDate, endDate] } },
          { endDate: { [Op.between]: [startDate, endDate] } },
        ],
      },
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ error: "Vehicle is already booked for the selected dates" });
    }

    // Create new booking
    const booking = await Booking.create({
      firstName,
      lastName,
      vehicleId,
      startDate,
      endDate,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
