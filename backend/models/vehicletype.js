"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VehicleType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleType.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      wheels: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "VehicleType",
      timestamps: false,
    }
  );
  return VehicleType;
};
