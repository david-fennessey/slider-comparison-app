import { Box } from "@mui/material";

import CarouselContainer from "../RecommendationCarousel";

const Content = ({ searchSku, models }) => {
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
              url={model.url}
              carouselName={model.name}
              searchSku={searchSku}
            />
          );
        }
      })}
    </Box>
  );
};

export default Content;
