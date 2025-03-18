import { NextArrow, PrevArrow } from './SliderArrows/SliderArrows';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import CompetitionsSlide from './Slides/CompetitionsSlide';
// import ButtonToAll from "../../../components/Buttons/ButtonToAll/ButtonToAll";
import { Link } from 'react-router-dom';
import './Slider.scss';
import { fetchCompetitions } from '../../store/competitionsSlice';
import { useEffect } from 'react';
// const parseDate = (dateString: string) => {
//   const [day, month, year] = dateString.split('.').map(Number);
//   return new Date(year, month - 1, day); 
// };
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

export default function CompetitionsSlider() {
  const dispatch = useDispatch<AppDispatch>();
  const { competitions, status, error } = useSelector(
    (state: RootState) => state.competitions
  );
//   const futureCompetitions = competitions
//   .filter((item) => item.startDate > new Date())
//   .sort(
//     (a, b) =>
//       parseDate(a.startDate.toString()).getTime() -
//       parseDate(b.startDate.toString()).getTime()
//   );

// const pastCompetitions = competitions
//   .filter((item) => item.startDate < new Date())
//   .sort(
//     (a, b) =>
//       parseDate(b.startDate.toString()).getTime() -
//       parseDate(a.startDate.toString()).getTime()
//   );

// const allCompetitionsFiltered = [...futureCompetitions, ...pastCompetitions];
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCompetitions());
      // console.log('Sending request to: /api/competitions', competitions);
    }
  }, [status, dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }


  return (
    <section className="competitions-slider" id="competitions">
      <h2 className="section-header">
        <Link to="/competitions"> Соревнования</Link>
      </h2>
      <Slider {...settings}>
        {competitions.map((item) => (
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
}
