// src/components/NewsSlide.tsx
import React from "react";
import "./NewsSlide.scss";
import { useNavigate } from "react-router-dom";

interface NewsSlideProps {
  title: string;
  content: string;
  date: string;
  image: string;
  id: number
}

const NewsSlide: React.FC<NewsSlideProps> = ({
  title,
  date,
  image,
  id
}) => {

  const navigate = useNavigate();

  const HandleOpenCurrentNew = () => {
    navigate(`/news/${id}`)
  }

  return (
    <div className="news-slide" onClick={HandleOpenCurrentNew}>
      <img src={image} alt={title} />
      <div className="news-slide__content">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default NewsSlide;
