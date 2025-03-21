import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CardDetailed.scss';
import { AppDispatch, RootState } from '../../store/store';
import ButtonBack from '../Buttons/ButtonBack/ButtonBack';
import imgPlaceholder from '../../assets/img/29D5fZxnA78.jpg';
import { fetchCompetitions } from '../../store/competitionsSlice';
// import DocumentSection from '../DocumentsSection/DocumentsSection';

const CompetitionsCardDetailed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const { competitions, competitionsStatus, competitionsError } = useSelector(
    (state: RootState) => state.competitions
  );

  useEffect(() => {
    if (competitionsStatus === 'idle') {
      dispatch(fetchCompetitions());
    }
  }, [dispatch, competitionsStatus]);
  const selectedCompetition = competitions.find(
    (item) => item.id === Number(id)
  );
  const images = selectedCompetition?.images.map(
    (img) => `http://localhost:5000${img}`
  ) || [imgPlaceholder];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const closeFullImage = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedImageIndex === null || !images.length) return;

      const newIndex =
        direction === 'prev'
          ? (selectedImageIndex - 1 + images.length) % images.length
          : (selectedImageIndex + 1) % images.length;

      console.log('Navigating image:', {
        direction,
        currentIndex: selectedImageIndex,
        newIndex,
      });
      setSelectedImageIndex(newIndex);
    },
    [selectedImageIndex, images.length]
  );


  if (selectedCompetition) {
    return (
      <article className="container content competitions__card-detailed">
        <div className="section-header">
          <h2>{selectedCompetition.title}</h2>
          <ButtonBack />
        </div>
        <div className="detailed__main textarea">
          <img
            src={selectedCompetition.images[0]}
            alt="Main"
            className="detailed__main-image"
            onClick={() => handleImageClick(0)}
          />
          {selectedCompetition.content
            .slice(0, selectedCompetition.content.length - 1)
            .map((text, index) => (
              <p className="detailed__main-text" key={index}>
                {text}
              </p>
            ))}
          {selectedCompetition.images.length > 1 && (
            <div className="detailed__image-list">
              {selectedCompetition.images.map((image, index) => (
                <img
                  key={index + 1}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="detailed__image-item"
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          )}
          {selectedCompetition.content.slice(-1).map((text, index) => (
            <p className="detailed__main-text" key={index}>
              {text}
            </p>
          ))}
          <p className="detailed__date">
            {selectedCompetition.startDate}, {selectedCompetition.location}
          </p>
        </div>
        {selectedImageIndex !== null && (
          <div
            className="detailed__full-image-overlay"
            onClick={closeFullImage}
          >
            <img
              src={selectedCompetition.images[selectedImageIndex]}
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
        {/* {selectedCompetition.resultsId ? <DocumentSection />} */}
      </article>
    );
  }
};

export default CompetitionsCardDetailed;
