"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsTo(models.VehicleType, {
        foreignKey: "vehicleTypeId",
        as: "vehicleType",
      });
      Vehicle.hasMany(models.Booking, {
        foreignKey: "vehicleId",
        as: "bookings",
      });
    }
  }
  Vehicle.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicleTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "VehicleTypes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Vehicle",
      timestamps: false,
    }
  );
  return Vehicle;
};
