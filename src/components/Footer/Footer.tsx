import './Footer.scss';
import { Link } from 'react-router-dom';
import ButtonTG from '../Buttons/ButtonSocial/ButtonTG';
import ButtonVK from '../Buttons/ButtonSocial/ButtonVK';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__box">
        <div className="footer__info">
          <div>
            <Link to="/federation">Уставные документы</Link>
          </div>
          <div>
            <Link to="https://www.russmn.ru/" target="_blank">
              Общероссийская Федерация
            </Link>
          </div>
        </div>
        <div className="footer__contacts">
          <a href="mailto:roofsmn2024@mail.ru">roofsmn2024@mail.ru</a>
          <div className="footer__contacts-social">
            <ButtonTG />
            <ButtonVK />
          </div>
        </div>
      </div>
    </footer>
  );
}
