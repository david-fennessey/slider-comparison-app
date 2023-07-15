import React from "react";

import styled from "@emotion/styled";
import { Box, Tooltip, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const productTileStyle = {
  display: "flex",
  flexDirection: "column",
  width: "150px",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
};

const imageStyle = {
  height: "150px",
  width: "150px",
  objectFit: "cover",
  objectPosition: "center",
};

const StyledContainer = styled(Box)`
  max-width: 1700px;
  --swiper-navigation-size: 22px;
  --swiper-navigation-top-offset: 75px;
  --swiper-navigation-sides-offset: 10px;

  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    .swiper-button-next:not(.swiper-button-disabled),
    .swiper-button-prev:not(.swiper-button-disabled) {
      opacity: 1;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
  }
`;

export const ProductTile = ({ product }) => {
  return (
    <Tooltip
      title={
        product.meta &&
        Object.entries(product.meta).map(([key, value]) => (
          <div key={key}>
            <strong>{key}: </strong> {value}
          </div>
        ))
      }
      enterDelay={1000}
    >
      <Box className="slide" sx={productTileStyle}>
        <img src={product.image} alt={product.title} style={imageStyle} />
        <Typography
          className="title"
          variant="p"
          align="center"
          color="textPrimary"
          component="p"
          sx={{
            padding: "2px",
            fontSize: "11px",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </Typography>
        {product.score != null && (
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
            Score: {product.score}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
};

const RecommendationCarousel = ({ carouselName, products }) => {
  let breakpoints = {};

  for (let i = 0; i < 10; i++) {
    breakpoints[i * 180] = {
      slidesPerView: i - 1,
      slidesPerGroup: i - 1,
      spaceBetween: 10,
    };
  }

  return (
    <StyledContainer>
      <Typography
        variant="h6"
        align="left"
        color="textSecondary"
        component="h6"
        gutterBottom
        sx={{
          fontSize: "14px",
        }}
      >
        {carouselName || "No Model Name Found!"}
      </Typography>
      <Swiper
        modules={[Navigation, Scrollbar]}
        breakpoints={breakpoints}
        navigation={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductTile product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
};

export default RecommendationCarousel;
