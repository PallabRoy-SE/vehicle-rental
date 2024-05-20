const { VehicleType } = require("../models");

exports.getAllVehicleTypes = async (req, res) => {
  try {
    const vehicleTypes = await VehicleType.findAll({
      where: { wheels: req.params.wheels },
    });
    res.json(vehicleTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
