import React from 'react';
import { useNavigate } from 'react-router-dom';
import './News&CometitionsCard.scss';
import imgPlaceholder from '../../assets/img/29D5fZxnA78.jpg';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  images: string[];
  content: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  date,
  images,
  content,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${id}`);
  };
  if (!images || images.length === 0) {
    images = [imgPlaceholder];
  } else {
    const imagesPath = images.map((img) => `http://localhost:5000${img}`);
    images = imagesPath;
  }
  return (
    <article className="news__card textarea" onClick={handleClick}>
      <div className="competitions__card-content">
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <span>{date}</span>
      </div>
      <img src={images[0]} alt={title} />
    </article>
  );
};

export default NewsCard;
