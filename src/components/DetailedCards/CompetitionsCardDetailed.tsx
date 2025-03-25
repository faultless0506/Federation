import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CardDetailed.scss';
import { AppDispatch, RootState } from '../../store/store';
import ButtonBack from '../Buttons/ButtonBack/ButtonBack';
import imgPlaceholder from '../../assets/img/29D5fZxnA78.jpg';
import { fetchCompetitions } from '../../store/competitionsSlice';
import { processImageUrls } from '../../utils/apiUtils';
// import DocumentSection from '../DocumentsSection/DocumentsSection';

const CompetitionsCardDetailed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const { competitions, competitionsStatus } = useSelector(
    (state: RootState) => state.competitions
  );
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (competitionsStatus === 'idle') {
      dispatch(fetchCompetitions());
    }
  }, [competitionsStatus, dispatch]);

  const selectedCompetition = competitions.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    if (selectedCompetition) {
      processImageUrls(selectedCompetition.images, imgPlaceholder).then(
        setImages
      );
    }
  }, [selectedCompetition]);

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
        <div className="detailed">
          <div className="detailed__gallery">
            <img
              src={images[0]}
              alt="Main"
              className="detailed__gallery-main-image"
              onClick={() => handleImageClick(0)}
            />

            {images.length > 1 && (
              <div className="detailed__gallery-image-list">
                {images.map((image, index) => (
                  <img
                    key={index + 1}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="detailed__gallery-image-item"
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="detailed__text-content  textarea">
            {selectedCompetition.content.map((text, index) => (
              <p className="detailed__main-text" key={index}>
                {text}
              </p>
            ))}
            <p className="detailed__date">
              {selectedCompetition.startDate}, {selectedCompetition.location}
            </p>
          </div>
        </div>
        {selectedImageIndex !== null && (
          <div
            className="detailed__full-image-overlay"
            onClick={closeFullImage}
          >
            <img
              src={images[selectedImageIndex]}
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
