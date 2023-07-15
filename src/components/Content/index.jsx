import { Box } from "@mui/material";

import CarouselContainer from "../RecommendationCarousel";

const Content = ({ querySku, models, allSkus }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        paddingTop: "2rem",
        paddingX: "2rem",
      }}
    >
      {Object.values(models).map((model) => {
        if (model.visible) {
          return (
            <CarouselContainer
              key={model.id}
              fetchDataFunction={model.data}
              carouselName={model.name}
              allSkus={allSkus}
              querySku={querySku}
            />
          );
        }
        return null; // Add this line to return a default value if model.visible is false
      })}
    </Box>
  );
};

export default Content;
