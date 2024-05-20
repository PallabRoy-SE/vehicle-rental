import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { bookVehicle } from "../../services/bookingService";
import { useAlert } from "../../contexts/AlertContext";
import { useLoader } from "../../contexts/LoaderContext";

const VhrDateRangeStep = ({ nextStep, values, handleChange }) => {
  const showAlert = useAlert();
  const { showLoader, hideLoader } = useLoader();
  const book = async () => {
    try {
      showLoader();
      const { firstName, lastName, vehicleType, startDate, endDate } = values;
      const res = await bookVehicle(
        firstName,
        lastName,
        vehicleType,
        startDate,
        endDate
      );
      if (res.id) {
        showAlert(
          `You have successfully booked your vehicle with reference id: ${res.id}`,
          "success"
        );
        nextStep(10);
      } else throw new Error("Booking not completed, Please try again.");
    } catch (error) {
      showAlert(error.response?.data?.error ?? error.message ?? error, "error");
    } finally {
      hideLoader();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    book();
  };

  return (
    <Box component="div" className="flex flex-col items-center w-full">
      <Typography variant="h5" mb={3}>
        Finally, Select dates to complete booking.
      </Typography>
      <Box className="w-full my-3">
        <InputLabel>Start Date</InputLabel>
        <TextField
          sx={{ width: "100%" }}
          onChange={handleChange("startDate")}
          defaultValue={values.startDate}
          margin="normal"
          type="date"
        />
      </Box>
      <Box className="w-full my-3">
        <InputLabel>End Date</InputLabel>
        <TextField
          sx={{ width: "100%" }}
          onChange={handleChange("endDate")}
          defaultValue={values.endDate}
          margin="normal"
          type="date"
        />
      </Box>

      <Button
        sx={{ width: "100%" }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!values.startDate || !values.endDate}
      >
        Book
      </Button>
    </Box>
  );
};

export default VhrDateRangeStep;
