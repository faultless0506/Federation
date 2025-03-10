import React from "react";
import "./CompetitionsSlide.scss";
import { useNavigate } from "react-router-dom";

interface CompetitionsSlideProps {
  id: number;
  title: string;
  content: string[];
  location: string;
  date: string;
  images: string[];
}

const CompetitionsSlide: React.FC<CompetitionsSlideProps> = ({
  id,
  title,
  location,
  date,
  images,
}) => {
  const navigate = useNavigate();

  const HandleOpenCurrentCompetition = () => {
    navigate(`/competitions/${id}`);
  };

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0
  };

  const currentDate = new Date();
  const isFinished = currentDate > parseDate(date);

  return (
    <article
      className={`competition-slide ${isFinished ? "finished" : ""}`}
      onClick={HandleOpenCurrentCompetition}
    >
      <img src={images[0]} alt={title} />
      {isFinished && (
        <div className="competition-slide__finished">
          <p>Соревнование завершено</p>
        </div>
      )}
      <div className="competition-slide__content">
        <h3>{title}</h3>
        <p>
          {date}
          <br />
          {location}
        </p>
      </div>
    </article>
  );
};

export default CompetitionsSlide;
