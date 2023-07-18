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

import ModelCheckboxes from "../ModelCheckboxes/ModelCheckboxes";
import RandomSkuButton from "../OutlinedButton";
import { ProductTile } from "../RecommendationCarousel/RecommendationCarousel";
const Sidebar = ({
  models,
  setModelVisibility,
  querySkuModel,
  querySku,
  setQuerySku,
  allSkus,
}) => {
  const handleQuerySkuChange = (event) => {
    setQuerySku(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        paddingRight: "1rem",
        borderRight: "1px solid rgba(128, 128, 128, 0.5)",
        display: "flex",
        flexDirection: "column",
        "& > div": {
          marginBottom: "10px",
        },
      }}
    >
      <Box
        sx={{
          height: "225px",
        }}
      >
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Query SKU: {querySku}
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
          label=""
          variant="outlined"
          value={querySku}
          onChange={handleQuerySkuChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={() => setQuerySku("")}>
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <RandomSkuButton setQuerySku={setQuerySku} allSkus={allSkus} />
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
