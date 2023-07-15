import { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { isEmpty } from "lodash";

import RecommendationCarousel from "./RecommendationCarousel";

const CarouselContainer = ({ fetchDataFunction, carouselName, querySku }) => {
  const [response, setResponse] = useState(null);
  console.log(querySku);

  useEffect(() => {
    setResponse(fetchDataFunction()[querySku] || []);
  }, [fetchDataFunction, querySku]);

  return !isEmpty(response) ? (
    <RecommendationCarousel carouselName={carouselName} products={response} />
  ) : (
    <Typography
      className="score"
      variant="p"
      align="center"
      color="textSecondary"
      component="p"
      gutterBottom
      sx={{
        marginTop: "auto",
        fontSize: "11px",
      }}
    >
      {carouselName} has no recommendations for sku {querySku}
    </Typography>
  );
};

export default CarouselContainer;
