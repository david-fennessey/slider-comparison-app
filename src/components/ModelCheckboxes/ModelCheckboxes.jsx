import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";

const ModelCheckboxes = ({ models, setModelVisibility }) => {
  return (
    <FormGroup>
      {Object.values(models).map((model) => (
        <FormControlLabel
          control={<Switch checked={model.visible} />}
          label={model.name}
          onChange={() => setModelVisibility(model.name)}
        />
      ))}
    </FormGroup>
  );
};

export default ModelCheckboxes;
