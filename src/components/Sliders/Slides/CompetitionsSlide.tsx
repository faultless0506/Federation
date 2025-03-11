import React from "react";
import "./Slides.scss";
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
    return new Date(year, month - 1, day); 
  };

  const currentDate = new Date();
  const isFinished = currentDate > parseDate(date);

  return (
    <article
      className={`competitions-slide ${isFinished ? "finished" : ""}`}
      onClick={HandleOpenCurrentCompetition}
    >
      <img src={images[0]} alt={title} />
      
      <div className="competitions-slide__content">
        <h3>{title}</h3>
        {isFinished && (
        <div className="competitions-slide__finished">
          <p>Соревнование завершено</p>
        </div>
      )}
        <span>
          {date}
          <br />
          {location}
        </span>
      </div>
    </article>
  );
};

export default CompetitionsSlide;
