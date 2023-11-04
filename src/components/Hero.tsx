"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/keyboard-banner-1.jpg",
      title: "Popular Keyboards",
      mainTitle: "MOST POPULAR KEYBOARDS",
      price: "$79.99",
    },
    {
      id: 1,
      img: "/keyboard-banner-2.jpg",
      title: "Stylish keycaps",
      mainTitle: "MOST TRENDING KEYCAPS",
      price: "$24.99",
    },
    {
      id: 2,
      img: "/keyboard-banner-3.jpg",
      title: "Sales on Keyboards",
      mainTitle: "KEYBOARDS ON SALE",
      price: "$49.99",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-6">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
