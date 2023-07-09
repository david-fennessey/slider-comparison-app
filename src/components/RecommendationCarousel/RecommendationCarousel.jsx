import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProductTile = ({ index, product }) => {
  return (
    <div className="slide" key={index}>
      {console.log(index)}
      <img src={product.image} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="price">{product.price}</div>
    </div>
  );
};

const RecommendationCarousel = ({ sliderName, products }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
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
    <div>
      <h2>{sliderName}</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductTile index={index} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default RecommendationCarousel;
