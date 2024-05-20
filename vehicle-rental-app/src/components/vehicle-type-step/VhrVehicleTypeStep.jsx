import React, { useEffect, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { getVehicleTypes } from "../../services/vehicleService";
import { useAlert } from "../../contexts/AlertContext";
import { useLoader } from "../../contexts/LoaderContext";

const VhrVehicleTypeStep = ({ nextStep, handleChange, values }) => {
  const { showLoader, hideLoader } = useLoader();
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const showAlert = useAlert();
  const loadVehicleTypes = async (wheelCount) => {
    try {
      showLoader();
      const resVehicleTypes = await getVehicleTypes(wheelCount);
      if (Array.isArray(resVehicleTypes)) {
        setVehicleTypes(() => [...resVehicleTypes]);
      }
    } catch (error) {
      showAlert(error.response?.data?.error ?? error.message ?? error, "error");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    loadVehicleTypes(values.wheels);
  }, []);

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box component="div" className="flex flex-col items-center w-full">
      <Typography variant="h5" mb={3} textAlign="center">
        Which Vehicle Type do you prefer?
      </Typography>
      <RadioGroup
        aria-label="vehicleType"
        name="vehicleType"
        value={values.vehicleType}
        onChange={handleChange("vehicleType")}
      >
        {vehicleTypes.map((type) => (
          <FormControlLabel
            key={type.id}
            value={type.id}
            control={<Radio />}
            label={type.name}
          />
        ))}
      </RadioGroup>
      <Button
        sx={{ width: "40%" }}
        variant="contained"
        color="primary"
        onClick={continueStep}
        disabled={!values.vehicleType}
      >
        Next
      </Button>
    </Box>
  );
};

export default VhrVehicleTypeStep;
