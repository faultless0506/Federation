import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './News&CometitionsCard.scss';
import imgPlaceholder from '../../assets/img/29D5fZxnA78.jpg';
import { processImageUrls } from '../../utils/apiUtils';

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
  const [processedImage, setProcessedImage] = useState(imgPlaceholder);

  useEffect(() => {
    const processImages = async () => {
      const processedImages = await processImageUrls(images, imgPlaceholder);
      setProcessedImage(processedImages[0] || imgPlaceholder);
    };
    processImages();
  }, [images]);

  const handleClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <article className="news__card textarea" onClick={handleClick}>
      <div className="competitions__card-content">
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <span>{date}</span>
      </div>
      <img src={processedImage} alt={title} />
    </article>
  );
};

export default NewsCard;
