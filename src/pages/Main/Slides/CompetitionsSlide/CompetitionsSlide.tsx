import React from "react";
import "./CompetitionsSlide.scss";
import { useNavigate } from "react-router-dom";

interface CompetitionsSlideProps {
  id: number;
  title: string;
  content: string;
  location: string;
  date: string;
  image: string;
}

const CompetitionsSlide: React.FC<CompetitionsSlideProps> = ({
  id,
  title,
  location,
  date,
  image,
}) => {
  const navigate = useNavigate();

  const HandleOpenCurrentCompetition = () => {
    navigate(`/competitions/${id}`);
  };

  const currentDate = new Date();
  const isFinished = currentDate > new Date(date);

  return (
    <div
      className={`competition-slide ${isFinished ? "finished" : ""}`}
      onClick={HandleOpenCurrentCompetition}
    >
      <img src={image} alt={title} />
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
    </div>
  );
};

export default CompetitionsSlide;
