import { newBooking } from "../api/bookingApi";

export const bookVehicle = (
  firstName,
  lastName,
  vehicleId,
  startDate,
  endDate
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
        throw new Error("All inputs should be field properly");
      }
      const reqBody = { firstName, lastName, vehicleId, startDate, endDate };
      const savedBooking = await newBooking(reqBody);
      resolve(savedBooking);
    } catch (error) {
      reject(error);
    }
  });
};
