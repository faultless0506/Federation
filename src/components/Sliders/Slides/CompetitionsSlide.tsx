import React, { useState, useEffect } from 'react';
import './Slides.scss';
import { useNavigate } from 'react-router-dom';
import imgPlaceholder from '../../../assets/img/29D5fZxnA78.jpg';
import { processImageUrls } from '../../../utils/apiUtils';

interface CompetitionsSlideProps {
  id: number;
  title: string;
  content: string[];
  location: string;
  startDate: string;
  images: string[];
}

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};

const CompetitionsSlide: React.FC<CompetitionsSlideProps> = ({
  id,
  title,
  location,
  startDate,
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

  const HandleOpenCurrentCompetition = () => {
    navigate(`/competitions/${id}`);
  };

  const currentDate = new Date();
  const isFinished = currentDate > parseDate(startDate);

  return (
    <article
      className={`competitions-slide ${isFinished ? 'finished' : ''}`}
      onClick={HandleOpenCurrentCompetition}
    >
      <img src={processedImage} alt={title} />

      <div className="competitions-slide__content">
        <h3>{title}</h3>
        <p>{content[0]}</p>
        <div className="competitions-slide__content-bottom">
          {isFinished && (
            <div className="competitions-slide__finished">
              <p>Соревнование завершено</p>
            </div>
          )}
          <span>
            {location}, <br />
            {startDate}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CompetitionsSlide;
