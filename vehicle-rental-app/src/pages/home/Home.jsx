import React, { useState } from "react";
import VhrNameStep from "../../components/name-step/VhrNameStep";
import VhrWheelsStep from "../../components/wheel-step/VhrWheelsStep";
import VhrVehicleTypeStep from "../../components/vehicle-type-step/VhrVehicleTypeStep";
import VhrModelStep from "../../components/model-step/VhrModelStep";
import VhrDateRangeStep from "../../components/date-range-step/VhrDateRangeStep";
import { Container, Typography, colors } from "@mui/material";

const getCurrentStepElement = (step, nextStep, handleChange, formData) => {
  switch (step) {
    case 0:
      return (
        <VhrNameStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );

    case 1:
      return (
        <VhrWheelsStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <VhrVehicleTypeStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <VhrModelStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 4:
      return (
        <VhrDateRangeStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    default:
      return (
        <Typography
          variant="h1"
          textAlign="center"
          color={colors.green.A700}
          fontWeight={600}
        >
          Booked !
        </Typography>
      );
  }
};

const Home = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    model: "",
    startDate: null,
    endDate: null,
  });

  const nextStep = (index = null) => setStep((prev) => prev + (index ?? 1));

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {getCurrentStepElement(step, nextStep, handleChange, formData)}
    </Container>
  );
};

export default Home;
