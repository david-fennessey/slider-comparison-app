import React from "react";

import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const productTileStyle = {
  display: "flex",
  flexDirection: "column",
  height: "200px",
  margin: "10px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
};

export const ProductTile = ({ product }) => {
  return (
    <Box className="slide" sx={productTileStyle}>
      <img src={product.image} alt={product.title} />
      <Typography
        className="title"
        variant="p"
        align="center"
        color="textPrimary"
        component="p"
        sx={{
          padding: "2px",
          flexGrow: 1,
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
      <Typography
        className="price"
        variant="p"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
      >
        Score: {product.score}
      </Typography>
    </Box>
  );
};

const RecommendationCarousel = ({ carouselName, products }) => {
  const breakpoints = {
    1024: {
      slidesPerView: 7,
      slidesPerGroup: 7,
    },
    600: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  };

  return (
    <Box>
      <Typography
        variant="h6"
        align="left"
        color="textSecondary"
        component="h6"
        gutterBottom
        sx={{
          fontSize: "14px",
          marginBottom: "2px",
        }}
      >
        {carouselName || "No Model Name Found!"}
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={7}
        slidesPerGroup={7}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductTile product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default RecommendationCarousel;
