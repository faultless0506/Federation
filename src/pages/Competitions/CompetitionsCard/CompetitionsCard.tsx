import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompetitionsCard.scss";

interface CompetitionsCardProps {
    id: number;
  title: string;
  date: string;
  images: string[];
  content: string[];
  location: string;
}

const CompetitionsCard: React.FC<CompetitionsCardProps> = ({
    id,
  title,
  date,
  images,
  content,
  location
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/competitions/${id}`);
  };
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day); 
  };
  const currentDate = new Date();
  const isFinished = currentDate > parseDate(date);

  return (
    <article className={`competitions__card textarea ${isFinished ? 'finished' : ''}`} onClick={handleClick}>
      <img src={images[0]} alt={title} />
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <span>{date}, {location}</span>
      {isFinished && (
        <div className="competitions__card-finished">
          <p>Соревнование завершено</p>
        </div>
      )}
    </article>
  );
};

export default CompetitionsCard;
