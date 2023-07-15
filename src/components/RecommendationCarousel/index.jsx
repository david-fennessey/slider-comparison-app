import { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { isEmpty } from "lodash";

import RecommendationCarousel from "./RecommendationCarousel";

const CarouselContainer = ({
  fetchDataFunction,
  carouselName,
  querySku,
  allSkus,
}) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    var skusAndScores = fetchDataFunction()[querySku] || [];
    setResponse(
      skusAndScores.map((skuAndScore) => ({
        ...allSkus[skuAndScore.sku],
        score: skuAndScore.score,
        meta: skuAndScore.meta,
      }))
    );
  }, [fetchDataFunction, querySku, allSkus]);

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
      {carouselName} has no data for sku {querySku}
    </Typography>
  );
};

export default CarouselContainer;
