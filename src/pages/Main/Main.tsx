// src/pages/News.tsx
import React from "react";
import "./Main.scss";
import NewsSlider from "./NewsSlider/NewsSlider";
import CompetitionsSlider from "./CompetitionsSlider/CompetitionsSlider";
import AboutFederation from "./AboutFederation/AboutFederation";

const Main: React.FC = () => {
  return (
    <div className="container content main">
      <NewsSlider />
      <CompetitionsSlider />
      <AboutFederation />
    </div>
  );
};

export default Main;
