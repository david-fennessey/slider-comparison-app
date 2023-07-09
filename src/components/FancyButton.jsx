import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";

const FancyButton = ({ buttonText }) => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">{buttonText}</Button>
      </Stack>
    </div>
  );
};

export default FancyButton;
