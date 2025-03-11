import './FedLocation.scss';
import img1 from './../../assets/img/fedLocationGuide.png';
import { Link } from 'react-router-dom';
export default function FedLocation() {
  return (
    <section className="fedlocation">
      <h2 className="section-header">Как нас найти</h2>

      <div className="fedlocation__box">
        <div className="fedlocation__desc">
          <h3>ТУТ ТЕКСТА многовато чет и мне впадлу писать</h3>
          <p>Вы можете найти нас на карте</p>
          <p>
            Также вы можете посетить нашу главную страницу в ��ндексе и найти
            информацию на странице "Контакты"
          </p>
          <p>При обращении к нам, пожалуйста, укажите наш номер телефона</p>
        </div>
        <Link to="https://yandex.ru/maps/-/CHBTMH9D" target="_blank">
          <img src={img1} alt="Как до нас добраться"></img>
        </Link>
      </div>
      <div className="fedlocation__lessons">
        <div className="fedlocation__lessons-req">
          <h3>Реквезиты организации</h3>
        </div>
        <h2 className="section-header"></h2>
      </div>
    </section>
  );
}
