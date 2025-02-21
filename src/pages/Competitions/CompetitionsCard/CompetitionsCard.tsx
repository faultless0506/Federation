import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompetitionsCard.scss";

interface CompetitionsCardProps {
    id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  location: string;
}

const CompetitionsCard: React.FC<CompetitionsCardProps> = ({
    id,
  title,
  date,
  image,
  content,
  location
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/competitions/${id}`);
  };

  return (
    <div className="competitions__card" onClick={handleClick}>
      <div className="competitions__card-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{date}, {location}</span>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default CompetitionsCard;
