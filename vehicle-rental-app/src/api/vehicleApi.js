import api from "./api";

export const fetchVehicleTypes = async (wheelCount) => {
  const res = await api.get(`/vehicle-types/${wheelCount}`);
  return res.data;
};
export const fetchVehicles = async (typeId) => {
  const res = await api.get(`/vehicles/${typeId}`);
  return res.data;
};
