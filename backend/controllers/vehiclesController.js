const { Vehicle } = require("../models");

exports.getVehiclesByTypeId = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({
      where: { vehicleTypeId: req.params.typeId },
    });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
