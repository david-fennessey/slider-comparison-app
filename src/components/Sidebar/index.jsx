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
import { ProductTile } from "../RecommendationCarousel/RecommendationCarousel";

const Sidebar = ({
  models,
  setModelVisibility,
  querySkuModel,
  setQuerySku,
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
          Query SKU
        </Typography>
        {querySkuModel ? (
          <ProductTile product={querySkuModel} />
        ) : (
          <Card sx={{ maxWidth: "100%", height: "auto", aspectRatio: "1/1" }}>
            <CardContent>
              <Typography
                variant="h6"
                color="textSecondary"
                component="h6"
                align="center"
              >
                No SKU is selected right now, start by searching for a SKU or
                using Random SKU
              </Typography>
            </CardContent>
          </Card>
        )}
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
          onChange={(event) => setQuerySku(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={setQuerySku}>
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
