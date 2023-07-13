import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import FancyButton from "../FancyButton";
import ModelCheckboxes from "../ModelCheckboxes/ModelCheckboxes";

const Sidebar = ({
  models,
  setModelVisibility,
  anchorSkuProduct,
  setAnchorSku,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        paddingRight: "1rem",
        borderRight: "1px solid rgba(128, 128, 128, 0.5)",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Anchor SKU
        </Typography>
        <Card sx={{ maxWidth: "100%", height: "auto", aspectRatio: "1/1" }}>
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h6"
              align="center"
            >
              No SKU selected right now, start by searching for a SKU or using
              Random SKU
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Search For a SKU
        </Typography>
        <TextField
          id="outlined-basic"
          label="SKU"
          variant="outlined"
          onChange={(value) => setAnchorSku(value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={setAnchorSku}>
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <FancyButton buttonText="Random SKU" />
      </Box>

      <Box>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Select Algorithms
        </Typography>
        <ModelCheckboxes
          models={models}
          setModelVisibility={setModelVisibility}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
