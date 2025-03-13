import { NextArrow, PrevArrow } from './SliderArrows/SliderArrows';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CompetitionsSlide from './Slides/CompetitionsSlide';
// import ButtonToAll from "../../../components/Buttons/ButtonToAll/ButtonToAll";
import { Link } from 'react-router-dom';
import './Slider.scss';

export default function CompetitionsSlider() {
  const competitions = useSelector(
    (state: RootState) => state.competitions.items
  );
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0
  };

  const futureCompetitions = competitions
    .filter((item) => parseDate(item.date) > new Date())
    .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

  const pastCompetitions = competitions
    .filter((item) => parseDate(item.date) < new Date())
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  const allCompetitionsFiltered = [
    ...futureCompetitions,
    ...pastCompetitions,
  ].splice(0, 10);

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

  return (
    <section className="competitions-slider" id="competitions">
      <h2 className="section-header">
        <Link to="/competitions"> Соревнования</Link>
      </h2>
      <Slider {...settings}>
        {allCompetitionsFiltered.map((item) => (
          <CompetitionsSlide
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            location={item.location}
            date={item.date}
            images={item.images}
          />
        ))}
      </Slider>
    </section>
  );
}
