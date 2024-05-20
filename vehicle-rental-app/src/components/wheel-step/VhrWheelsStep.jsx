import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Typography,
} from "@mui/material";

const VhrWheelsStep = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box component="div" className="flex flex-col items-center w-full">
      <Typography variant="h4" mb={3}>
        Vehicle nature?
      </Typography>
      <RadioGroup
        aria-label="wheels"
        name="wheels"
        value={values.wheels}
        onChange={handleChange("wheels")}
      >
        <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
        <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
      </RadioGroup>
      <Button
        sx={{ width: "50%" }}
        variant="contained"
        color="primary"
        onClick={continueStep}
        disabled={!values.wheels}
      >
        Next
      </Button>
    </Box>
  );
};

export default VhrWheelsStep;
