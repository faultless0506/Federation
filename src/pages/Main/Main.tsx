// src/pages/News.tsx
import React from "react";
import "./Main.scss";
import NewsSlider from "./NewsSlider/NewsSlider";
import CompetitionsSlider from "./CompetitionsSlider/CompetitionsSlider";
import Federation from "./Federation/Federation";
// import Sportsmans from "../../components/Sportsmans/Sportsmans";
// import Federation from "./Federation/Federation";

const Main: React.FC = () => {
  return (
    <div className="container content main ">
      {/* <div className="container"> */}
      <NewsSlider />
      <CompetitionsSlider />
      <Federation />  
    </div>
  );
};

export default Main;
