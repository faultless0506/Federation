import React from 'react';
import { useNavigate } from 'react-router-dom';
import './News&CometitionsCard.scss';
import imgPlaceholder from '../../assets/img/29D5fZxnA78.jpg';

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
