import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CompetitionsSlide from './Slides/CompetitionsSlide';
import { NextArrow, PrevArrow } from './SliderArrows/SliderArrows';
import { Link } from 'react-router-dom';
import './Slider.scss';
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
const CompetitionsSlider = () => {
  const competitionsContainer = useSelector(
    (state: RootState) => state.competitions
  );
  if (competitionsContainer.competitionsStatus === 'loading') {
    return (
      <>
        <h2 className="section-header">
          <Link to="/competitions">Соревнования</Link>
        </h2>
        <LoadingIndicator />
      </>
    );
  }
  if (competitionsContainer.competitionsStatus === 'failed') {
    return (
      <>
        <h2 className="section-header">
          <Link to="/competitions">Соревнования</Link>
        </h2>
        <FailedIndicator />
      </>
    );
  }
  return (
    <section className="competitions-slider">
      <h2 className="section-header">
        <Link to="/competitions">Соревнования</Link>
      </h2>
      <Slider {...settings}>
        {competitionsContainer.competitions.map((item) => (
          <CompetitionsSlide
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            location={item.location}
            startDate={item.startDate}
            images={item.images}
          />
        ))}
      </Slider>
    </section>
  );
};

export default CompetitionsSlider;
