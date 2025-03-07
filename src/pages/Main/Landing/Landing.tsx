import React from 'react';
import './Landing.scss';

const Landing: React.FC = () => {
  return (
    <section className="landing">
      <div className="container landing__box">
        <div className="landing__desc">
          <h1>Спортивное метание ножа в Москве</h1>
          <p>
            Спортивное метание ножа — это увлекательный и динамичный вид спорта,
            который требует точности, концентрации и мастерства. Это не только
            физическая активность, но и отличный способ развить координацию,
            улучшить реакцию и научиться контролировать свои движения.
          </p>

          <p>
            <b>Почему стоит присоединиться к нашей Федерации?</b>
          </p>
          <p>
            Наши опытные тренеры помогут вам освоить технику безопасного и
            точного метания, начиная с азов и заканчивая продвинутыми приемами.
            <br />
          </p>
          <p>
            Вы получите доступ к участию в соревнованиях, турнирах и чемпионатах
            от имени Федерации. Состязайтесь с лучшими и доказывайте свое
            мастерство на практике!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
