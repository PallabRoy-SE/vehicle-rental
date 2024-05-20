"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    try {
      await queryInterface.bulkInsert(
        "VehicleTypes",
        [
          { name: "Hatchback", wheels: 4 },
          { name: "SUV", wheels: 4 },
          { name: "Sedan", wheels: 4 },
          { name: "Cruiser", wheels: 2 },
          { name: "Sports", wheels: 2 },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "Vehicles",
        [
          { model: "Citroen E-C3", vehicleTypeId: 1 },
          { model: "Mahindra Scorpio", vehicleTypeId: 2 },
          { model: "Maruti Dzire", vehicleTypeId: 3 },
          { model: "Royal Enfield Meteor", vehicleTypeId: 4 },
          { model: "Kawasaki Ninja H2R", vehicleTypeId: 5 },
        ],
        {}
      );
    } catch (error) {
      console.error("Error during seeding:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    try {
      await queryInterface.bulkDelete("Vehicle", null, {});
      await queryInterface.bulkDelete("VehicleType", null, {});
    } catch (error) {
      console.error("Error during reverting seed:", error);
    }
  },
};
