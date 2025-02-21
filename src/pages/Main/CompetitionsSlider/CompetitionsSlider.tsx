import "./CompetitionsSlider.scss";
import { NextArrow, PrevArrow } from "../SliderArrows/SliderArrows";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import CompetitionsSlide from "../Slides/CompetitionsSlide/CompetitionsSlide";
// import ButtonToAll from "../../../components/Buttons/ButtonToAll/ButtonToAll";
import { Link } from "react-router-dom";

export default function CompetitionsSlider() {
  const competitions = useSelector(
    (state: RootState) => state.competitions.items
  );
  const futureCompetitions = competitions.filter((item) => new Date(item.date) > new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastCompetitions = competitions.filter((item) => new Date(item.date) < new Date()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const allCompetitionsFiltered = [...futureCompetitions, ...pastCompetitions];
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
    <div className="competitions-slider">
      <h2><Link to="/competitions"> Соревнования</Link></h2>
      <Slider {...settings}>
        {allCompetitionsFiltered
          .map((item) => (
            <CompetitionsSlide
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              location={item.location}
              date={item.date}
              image={item.image}
            />
          ))}
      </Slider>
    </div>
  );
}
