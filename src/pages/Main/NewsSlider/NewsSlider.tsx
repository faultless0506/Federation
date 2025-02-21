import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Slider from "react-slick";
import NewsSlide from "../Slides/NewsSlide/NewsSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsSlider.scss";
import { NextArrow, PrevArrow } from "../SliderArrows/SliderArrows";
import { Link } from "react-router-dom";

const NewsSlider: React.FC = () => {
  const news = useSelector((state: RootState) => state.news.items);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="news-slider">
      <h2><Link to="/news" >Новости</Link></h2>
      <Slider {...settings}>
        {news.map((item) => (
          <NewsSlide
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
            image={item.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
