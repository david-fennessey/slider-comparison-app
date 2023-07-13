import React from "react";

import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

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

const ProductTile = ({ product }) => {
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
          padding: "4px",
          flexGrow: 1,
          fontSize: "12px",
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
        {product.price}
      </Typography>
    </Box>
  );
};

const RecommendationCarousel = ({ carouselName, products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
      <Slider {...settings}>
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </Slider>
    </Box>
  );
};

export default RecommendationCarousel;
