import { Box } from "@mui/material";

import CarouselContainer from "../RecommendationCarousel";

const Content = ({ querySku, models }) => {
  return (
    <Box
      sx={{
        paddingX: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.055)",
        borderRadius: "20px",
      }}
    >
      {Object.values(models).map((model) => {
        if (model.visible) {
          return (
            <CarouselContainer
              key={model.id}
              fetchDataFunction={model.data}
              carouselName={model.name}
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
