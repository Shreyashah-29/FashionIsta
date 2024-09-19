// components/Stepper.js
import React from "react";
import { Stepper, Step, StepLabel, Typography, Container } from "@mui/material";
import { useHistory, useLocation, useNavigate } from "react-router-dom";

const steps = ["Cart", "Order", "Payment"];

const StepperComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeStep = steps.findIndex((step) =>
    location.pathname.includes(step.toLowerCase())
  );

  const handleStepClick = (step) => {
    navigate(`/${step.toLowerCase()}`);
  };

  return (
    <Container >
      <Stepper activeStep={activeStep} sx={{  width: "70%", m:"auto"}}>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => handleStepClick(label)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default StepperComponent;
