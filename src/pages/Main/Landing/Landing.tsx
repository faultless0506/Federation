import React from "react";
import "./Landing.scss";
import landingImg  from '../../../assets/img/29D5fZxnA78.jpg';



const AdaptiveImageComponent: React.FC = () => {
  return (
    <section className="landing">
      <div className="landing__desc">
desc
      </div>
        <img  className='landing__img' src={landingImg} alt="landing-img" />
    </section>
  );
};

export default AdaptiveImageComponent;
