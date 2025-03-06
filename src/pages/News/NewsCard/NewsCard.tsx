import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsCard.scss';

interface NewsCardProps {
  title: string;
  date: string;
  images: string[];
  content: string[];
  id: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  images,
  content,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <article className="news__card textarea" onClick={handleClick}>
      <img src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>{content[0]}</p>
      <span>{date}</span>
    </article>
  );
};

export default NewsCard;
