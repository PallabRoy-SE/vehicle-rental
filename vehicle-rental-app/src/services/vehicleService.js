import { fetchVehicleTypes, fetchVehicles } from "../api/vehicleApi";

export const getVehicleTypes = (wheelCount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const vehicleTypes = await fetchVehicleTypes(wheelCount);
      resolve(vehicleTypes);
    } catch (error) {
      reject(error);
    }
  });
};

export const getVehicles = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeId) {
        throw new Error("Vehicle type id required");
      }
      const vehicles = await fetchVehicles(typeId);
      resolve(vehicles);
    } catch (error) {
      reject(error);
    }
  });
};
