import React from "react";

import { Box, Tooltip, Typography } from "@mui/material";
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

const imageStyle = {
  height: "150px",
  objectFit: "cover",
  objectPosition: "center",
};

export const ProductTile = ({ product }) => {
  console.log(product.meta);
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
  const breakpoints = {
    1200: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    480: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    0: {
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
