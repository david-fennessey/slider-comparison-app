import React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const pickRandomSku = (allSkus) => {
  const skus = Object.keys(allSkus);
  const randomSku = skus[Math.floor(Math.random() * skus.length)];
  return randomSku;
};

const pickRandomSkuAndSetQuerySku = (allSkus, setQuerySku) => {
  const randomSku = pickRandomSku(allSkus);
  setQuerySku(randomSku);
};

const OutlinedButton = ({ setQuerySku, allSkus }) => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          onClick={() => pickRandomSkuAndSetQuerySku(allSkus, setQuerySku)}
        >
          Random SKU
        </Button>
      </Stack>
    </div>
  );
};

export default OutlinedButton;
