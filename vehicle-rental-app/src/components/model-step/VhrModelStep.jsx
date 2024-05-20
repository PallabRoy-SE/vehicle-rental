import React, { useEffect, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { getVehicles } from "../../services/vehicleService";
import { useAlert } from "../../contexts/AlertContext";
import { useLoader } from "../../contexts/LoaderContext";

const VhrModelStep = ({ nextStep, handleChange, values }) => {
  const { showLoader, hideLoader } = useLoader();
  const [models, setModels] = useState([]);
  const showAlert = useAlert();

  const loadModels = async (typeId) => {
    try {
      showLoader();
      const resModels = await getVehicles(typeId);
      if (Array.isArray(resModels)) {
        setModels(() => [...resModels]);
      }
    } catch (error) {
      showAlert(error.response?.data?.error ?? error.message ?? error, "error");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    loadModels(values.vehicleType);
  }, []);

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box component="div" className="flex flex-col items-center w-full">
      <Typography variant="h5" mb={3}>
        Which Vehicle model you want to book?
      </Typography>
      <RadioGroup
        aria-label="model"
        name="model"
        value={values.model}
        onChange={handleChange("model")}
      >
        {models.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.model}
          />
        ))}
      </RadioGroup>
      <Button
        sx={{ width: "50%" }}
        variant="contained"
        color="primary"
        onClick={continueStep}
        disabled={!values.model}
      >
        Next
      </Button>
    </Box>
  );
};

export default VhrModelStep;
