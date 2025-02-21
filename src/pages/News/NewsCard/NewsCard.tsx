import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewsCard.scss";

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  content: string;
  id: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  image,
  content,
  id
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="news__card" onClick={handleClick}>
      <div className="news__card-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{date}</span>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default NewsCard;
