import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CardDetailed.scss';
import { RootState } from '../../store/store';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';

const CompetitionsCardDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const currentCompetition = useSelector((state: RootState) =>
    state.competitions.items.find((item) => item.id === Number(id))
  );

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const closeFullImage = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedImageIndex === null || !currentCompetition?.images.length) return;

      const newIndex =
        direction === 'prev'
          ? (selectedImageIndex - 1 + currentCompetition.images.length) %
          currentCompetition.images.length
          : (selectedImageIndex + 1) % currentCompetition.images.length;

      console.log('Navigating image:', {
        direction,
        currentIndex: selectedImageIndex,
        newIndex,
      });
      setSelectedImageIndex(newIndex);
    },
    [selectedImageIndex, currentCompetition?.images.length]
  );

  // console.log('Current selected image index:', selectedImageIndex);

  if (!currentCompetition) {
    return (
      <h2>
        Соревнование не найдено.
        <ButtonBack />
      </h2>
    );
  }

  return (
    <article className="container content competitions__card-detailed">
      <h2>
        {currentCompetition.title}
        <ButtonBack />
      </h2>
      <div className="detailed__main textarea">
        <img
          src={currentCompetition.images[0]}
          alt="Main"
          className="detailed__main-image"
          onClick={() => handleImageClick(0)}
        />
          {currentCompetition.content.slice(0, currentCompetition.content.length -1).map((text, index) => (
          <p className="detailed__main-text" key={index}>
            {text}
          </p>
        ))}
        {currentCompetition.images.length > 1 && (
          <div className="detailed__image-list">
            {currentCompetition.images.map((image, index) => (
              <img
                key={index + 1}
                src={image}
                alt={`Image ${index + 1}`}
                className="detailed__image-item"
                onClick={() => handleImageClick(index )}
              />
            ))}
          </div>
        )}
        {currentCompetition.content.slice(-1).map((text, index) => (
          <p className="detailed__main-text" key={index}>
            {text}
          </p>
        ))}
      </div>
      <span className="detailed__date">{currentCompetition.date}, {currentCompetition.location}</span>
      {selectedImageIndex !== null && (
        <div className="detailed__full-image-overlay" onClick={closeFullImage}>
          <img
            src={currentCompetition.images[selectedImageIndex]}
            alt="Full size"
            className="detailed__full-image"
          />
          <div
            className="detailed__full-image-close"
            onClick={closeFullImage}
          ></div>
          <div
            className="detailed__nav-button detailed__nav-button-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          ></div>
          <div
            className="detailed__nav-button detailed__nav-button-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          ></div>
        </div>
      )}
    </article>
  );
};

export default CompetitionsCardDetailed;
