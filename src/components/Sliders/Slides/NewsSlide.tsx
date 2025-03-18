// src/components/NewsSlide.tsx
import React from 'react';
import './Slides.scss';
import { useNavigate } from 'react-router-dom';
import imgPlaceholder from '../../../assets/img/29D5fZxnA78.jpg';

interface NewsSlideProps {
  id: number;
  title: string;
  content: string[];
  date: Date;
  images: string[];
}

const NewsSlide: React.FC<NewsSlideProps> = ({
  title,
  content,
  date,
  images,
  id,
}) => {
  const navigate = useNavigate();

  const HandleOpenCurrentNew = () => {
    navigate(`/news/${id}`);
  };
  if (!images || images.length === 0) {
    images = [imgPlaceholder];
  } else {
    const imagesPath = images.map((img) => `http://localhost:5000${img}`);
    images = imagesPath;
  }
  return (
    <article className="news-slide" onClick={HandleOpenCurrentNew}>
      <img src={images[0]} alt={title} />
      <div className="news-slide__content">
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <div className="news-slide__content-bottom">
          <span>{date.toString().split('T')[0].split('-').reverse().join('/')}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsSlide;
