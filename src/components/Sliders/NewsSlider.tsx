import Slider from 'react-slick';
import NewsSlide from './Slides/NewsSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import { NextArrow, PrevArrow } from './SliderArrows/SliderArrows';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import LoadingIndicator from '../Indicators/LoadingIndicator/LoadingIndicator';
import FailedIndicator from '../Indicators/FailedIndicator/FailedIndicator';
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
const NewsSlider = () => {
  const newsContainer = useSelector((state: RootState) => state.news);

  if (newsContainer.newsStatus === 'loading') {
    return (
      <>
        <h2 className="section-header">
          <Link to="/news">Новости</Link>
        </h2>
        <LoadingIndicator />
      </>
    );
  }
  if (newsContainer.newsStatus === 'failed') {
    return (
      <>
        <h2 className="section-header">
          <Link to="/news">Новости</Link>
        </h2>
        <FailedIndicator />
      </>
    );
  }

  return (
    <section className="news-slider" id="news">
      <h2 className="section-header">
        <Link to="/news">Новости</Link>
      </h2>
      <Slider {...settings}>
        {newsContainer.news.map((item) => (
          <NewsSlide
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.createdAt
              .toString()
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/')}
            images={item.images}
          />
        ))}
      </Slider>
    </section>
  );
};

export default NewsSlider;
