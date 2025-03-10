// src/pages/News.tsx
import React from 'react';
import './Main.scss';
import NewsSlider from './Sliders/NewsSlider';
import CompetitionsSlider from './Sliders/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import Landing from './Landing/Landing';
import FedLocation from './FedLocation/FedLocation';
const Main: React.FC = () => {
  return (
    <>
      <Landing />
      <div className="container content main">
        <NewsSlider />
        <CompetitionsSlider />
        <ClubsAndPartners />
        <FedLocation />
      </div>
    </>
  );
};

export default Main;
