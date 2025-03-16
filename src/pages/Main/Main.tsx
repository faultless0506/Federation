// src/pages/News.tsx
import React from 'react';
import './Main.scss';
import NewsSlider from '../../components/Sliders/NewsSlider';
import CompetitionsSlider from '../../components/Sliders/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import { MainLanding } from '../../components/Landing/MainLanding';
import FedLocation from '../../components/FedLocation/FedLocation';
import Lessons from '../../components/Lessons/Lessons';
import FedDetails from '../../components/FedDetails/FedDetails';
import PageMenu from '../../components/NavMenu/NavMenu';
import Trainers from '../../components/PeopleLists/Trainers';
const Main: React.FC = () => {
  return (
    <>
      <MainLanding />
      <PageMenu
        items={[
          { id: 'location', label: 'Как добраться' },
          { id: 'lessons', label: 'Занятия' },
          { id: 'news', label: 'Новости и соревнования' },
          { id: 'details', label: 'Устав' },
          { id: 'clubs-and-partners', label: 'Партнерские организации' },
        ]}
      />
      <div className="container content main">
        <NewsSlider />
        <FedLocation />
        <Lessons />
        <Trainers />
        <CompetitionsSlider />
        <FedDetails />
        <ClubsAndPartners />
      </div>
    </>
  );
};

export default Main;
