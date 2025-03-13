import './FedLocation.scss';
import img1 from './../../assets/img/fedLocationGuide.png';
export default function FedLocation() {
  return (
    <section className="location" id="location">
      <div className="location__box">
        <div className="location__desc">
          <h3>ТУТ ТЕКСТА многовато чет и мне впадлу писать</h3>
          <p>Вы можете найти нас на карте</p>
          <p>
            Также вы можете посетить нашу главную страницу в ��ндексе и найти
            информацию на странице "Контакты"
          </p>
          <p>При обращении к нам, пожалуйста, укажите наш номер телефона</p>
        </div>
        <a href="https://yandex.ru/maps/-/CHBTMH9D" target="_blank">
          <img src={img1} alt="Как до нас добраться"></img>
        </a>
      </div>
    </section>
  );
}
