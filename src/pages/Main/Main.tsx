// src/pages/News.tsx
import React from 'react';
import './Main.scss';
import NewsSlider from './NewsSlider/NewsSlider';
import CompetitionsSlider from './CompetitionsSlider/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import Landing from './Landing/Landing';
const Main: React.FC = () => {
  return (
    <>
      <Landing />
      <div className="container content main">
        <NewsSlider />
        <CompetitionsSlider />
        <ClubsAndPartners />
      </div>
    </>
  );
};

export default Main;
