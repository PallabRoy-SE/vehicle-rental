import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const VhrNameStep = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box component="div" className="flex flex-col items-center w-full">
      <Typography variant="h5">First, What's your name?</Typography>
      <TextField
        sx={{ width: "100%" }}
        label="First Name"
        onChange={handleChange("firstName")}
        defaultValue={values.firstName}
        margin="normal"
        required
      />
      <TextField
        sx={{ width: "100%" }}
        label="Last Name"
        onChange={handleChange("lastName")}
        defaultValue={values.lastName}
        margin="normal"
        required
      />
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        color="primary"
        onClick={continueStep}
        disabled={!values.firstName || !values.lastName}
      >
        Next
      </Button>
    </Box>
  );
};

export default VhrNameStep;
