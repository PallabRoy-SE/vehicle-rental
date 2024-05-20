import api from "./api";

export const newBooking = async (reqBody) => {
  const res = await api.post(`/book`, reqBody);
  return res.data;
};
