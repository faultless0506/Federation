
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
        <ul className="footer__contacts">
          <li>
            <Link to="/" target="_blank">
              fmsnm@moscow.ru
            </Link>
          </li>
          <ButtonTG />
          <ButtonVK />
        </ul>
      </div>
    </footer>
  );
}
