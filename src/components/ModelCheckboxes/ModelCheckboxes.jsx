import React from "react";

import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const ModelCheckboxes = ({ models, setModelVisibility }) => {
  return (
    <FormGroup>
      {Object.values(models).map((model) => (
        <FormControlLabel
          key={model.id}
          control={<Switch checked={model.visible} />}
          label={model.name}
          onChange={() => setModelVisibility(model.id)}
        />
      ))}
    </FormGroup>
  );
};

export default ModelCheckboxes;
