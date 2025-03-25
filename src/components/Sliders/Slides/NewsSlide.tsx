// src/components/NewsSlide.tsx
import React, { useState, useEffect } from 'react';
import './Slides.scss';
import { useNavigate } from 'react-router-dom';
import imgPlaceholder from '../../../assets/img/29D5fZxnA78.jpg';
import { processImageUrls } from '../../../utils/apiUtils';

interface NewsSlideProps {
  id: number;
  title: string;
  content: string[];
  date: string;
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
  const [processedImage, setProcessedImage] = useState(imgPlaceholder);

  useEffect(() => {
    const processImages = async () => {
      const processedImages = await processImageUrls(images, imgPlaceholder);
      setProcessedImage(processedImages[0] || imgPlaceholder);
    };
    processImages();
  }, [images]);

  const HandleOpenCurrentNew = () => {
    navigate(`/news/${id}`);
  };

  return (
    <article className="news-slide" onClick={HandleOpenCurrentNew}>
      <img src={processedImage} alt={title} />
      <div className="news-slide__content">
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <div className="news-slide__content-bottom">
          <span>
            {date.toString().split('T')[0].split('-').reverse().join('/')}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsSlide;
