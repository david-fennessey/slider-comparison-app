import { useEffect, useState } from "react";

import { isEmpty } from "lodash";

import RecommendationCarousel from "./RecommendationCarousel";

const CarouselContainer = ({ url, carouselName, searchSku }) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setResponse(responseData.products || []);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [url, searchSku]);

  return !isEmpty(response) ? (
    <RecommendationCarousel carouselName={carouselName} products={response} />
  ) : (
    <p>Loading...</p>
  );
};

export default CarouselContainer;
