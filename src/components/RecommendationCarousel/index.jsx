import { useEffect, useState } from "react";

import { isEmpty } from "lodash";

import RecommendationCarousel from "./RecommendationCarousel";

const CarouselContainer = ({ fetchDataFunction, carouselName, searchSku }) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(fetchDataFunction()["skuA"] || []);
  }, [fetchDataFunction, searchSku]);

  return !isEmpty(response) ? (
    <RecommendationCarousel carouselName={carouselName} products={response} />
  ) : (
    <p>Loading...</p>
  );
};

export default CarouselContainer;
