import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const AlgorithmCheckboxes = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Algorithm 1"
      />
      <FormControlLabel control={<Checkbox />} label="Algorithm 2" />
      <FormControlLabel control={<Checkbox />} label="Algorithm 3" />
    </FormGroup>
  );
};

export default AlgorithmCheckboxes;
