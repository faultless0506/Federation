import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import Slider from 'react-slick';
import NewsSlide from './Slides/NewsSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import { NextArrow, PrevArrow } from './SliderArrows/SliderArrows';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../store/newsSlice';

const settings = {
  dots: true,
  dotsClass: 'slick-dots',
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const NewsSlider: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news, status, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  // console.log('News data:', news);

  return (
    <section className="news-slider" id="news">
      <h2 className="section-header">
        <Link to="/news">Новости</Link>
      </h2>
      <Slider {...settings}>
        {news.map((item) => (
          <NewsSlide
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.createdAt}
            images={item.images}
          />
        ))}
      </Slider>
    </section>
  );
};

export default NewsSlider;
