// src/components/NewsSlide.tsx
import React from "react";
import "./NewsSlide.scss";
import { useNavigate } from "react-router-dom";

interface NewsSlideProps {
  title: string;
  content: string[];
  date: string;
  images: string[];
  id: number
}

const NewsSlide: React.FC<NewsSlideProps> = ({
  title,
  date,
  images,  
  id
}) => {

  const navigate = useNavigate();

  const HandleOpenCurrentNew = () => {
    navigate(`/news/${id}`)
  }

  return (
    <article className="news-slide" onClick={HandleOpenCurrentNew}>
      <img src={images[0]} alt={title} />
      <div className="news-slide__content">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </article>
  );
};

export default NewsSlide;
