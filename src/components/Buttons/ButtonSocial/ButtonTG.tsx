import { Link } from 'react-router-dom';
import './ButtonSocial.scss';
import tg from "./../../../assets/svg/tg.svg";

export default function ButtonTG() {
    return (
        <li className="button__social"><Link to='https://t.me/mfsmn' target="_blank"><img src={tg} alt="" /></Link></li>
    );
}